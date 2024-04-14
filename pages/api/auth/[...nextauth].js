import connectMongo from "@/database/conn"
import User from "@/models/User"
import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {
                connectMongo().catch(error => { error: 'Connection Failed' })
                const user = await User.findOne({ email: credentials.email })
                if (!user) { throw new Error('No user Found with this Email') }
                const passwordMatch = await bcrypt.compare(credentials.password, user.password);
                if (passwordMatch) {
                    return user;
                } else {
                    throw new Error('Password is Incorrect')
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user }) {
            if (user) {
                await connectMongo().catch(error => { console.log(error) })
                let u = await User.findOne({ 'email': user.email })
                if (u) {
                    user.id = u._id.toString();
                    return { user };
                } else {
                    u = await User.create({
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        provider: 'google',
                        verfied:true
                    })
                    user.id = u._id.toString();
                    return { user };
                }

            }
            return null;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    verified:user.verified
                };
            }
            
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = token.user;
            }
            return session;
        }

    }
}
export default NextAuth(authOptions)

export const getServerAuthSession = (req, res) => {
    return getServerSession(req, res, authOptions)
}