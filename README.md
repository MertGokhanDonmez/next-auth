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
