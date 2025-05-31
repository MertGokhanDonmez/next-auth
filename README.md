# Next.js Authentication App

A simple authentication application built with Next.js and Auth0.

## Features

- Authentication with Auth0
- Protected routes
- Admin dashboard
- User dashboard
- Session management

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_AUTH0_CLIENT_ID=your_client_id
AUTH0_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_AUTH0_DOMAIN=your_domain
NEXTAUTH_SECRET=your_secret
```

4. Run the development server:

```bash
npm run dev
```

## Tech Stack

- Next.js
- NextAuth.js
- Auth0
- Tailwind CSS

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
