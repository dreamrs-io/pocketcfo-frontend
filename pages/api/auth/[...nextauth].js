import connectMongo from "@/database/conn"
import User from "@/models/User"
import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            if (user) {

                await connectMongo().catch(error => { console.log(error) })
                let u = await User.findOne({ 'email': user.email })
                if (u) {
                    user.id = u._id.toString();
                    user.role = u.role
                    user.permissions = u.permissions;
                    return { user };
                } else {
                    u = await User.create({
                        name: user.name,
                        email: user.email,
                        image:user.image
                    })
                    user.id = u._id.toString();
                    user.role = u.role;
                    user.permissions = u.permissions;
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
                    image: user.image
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