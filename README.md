This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Static Content 

Some of the static content is comming from `data/content` you can modify  

```javascript lineons

        const reasons = [

            {
                id:1,
                icon:usersIcon,
                title:'People Trust Us',
                subtitle:'Over a billion users have used our service to simplify their work with digital documents.'

            },
            {
                id:2,
                icon:bussiness,
                title:'Businesses Trust Us',
                subtitle:'We’re one of the highest-rated PDF software on major B2B software listing platforms: Capterra, G2, and TrustPilot.'

            }
    ]




```