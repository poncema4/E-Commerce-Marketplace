# TenantE

## What is TenantE?

TenantE is a multitenant SaaS platform that empowers users to create and manage their own online stores under a single, scalable solution. Each tenant gets a customizable storefront, product management, secure checkout, and review system—all built with a modern full-stack architecture!

---

## Tech Stack

**Frontend:**

- **Next.js (App Router)** – React framework for SSR, routing, and layouts
- **TypeScript** – Type-safe JavaScript for maintainability
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **shadcn/ui** – Accessible, customizable UI components

**Backend:**

- **Next.js API Routes** – Serverless backend logic
- **Payload CMS** – Headless CMS for content, users, and multi-tenancy
- **MongoDB** – Database for all persistent data (via Payload)
- **tRPC** – End-to-end typesafe API layer for client-server communication
- **Stripe** – Payment processing and multi-tenant payouts
- **Vercel Blob Storage** – Media and file storage

### Authentication

- **Payload Auth** – Secure authentication and session management

### Deployment

- **Vercel** – Hosting and serverless deployment

---

## Features

- **Multi-Tenant SaaS:** Each user can create and manage their own store (tenant) with custom products and branding
- **Product Management:** Add, edit, and categorize products with rich content and media
- **Checkout & Payments:** Secure Stripe-powered checkout with per-tenant payouts
- **User Reviews:** Customers can leave reviews for purchased products
- **Authentication:** Secure sign-up/sign-in for store owners and customers
- **Responsive UI:** Modern, accessible, and mobile-friendly design
- **Admin Dashboard:** Manage tenants, users, products, and orders via Payload CMS
- **Subdomain Routing:** Optional subdomain per tenant (e.g., `tenant.yourdomain.com`)

---

## How to Use?

1. **Visit the app:**  
   [https://multitenant-ecommerce-zeta-gilt.vercel.app/](https://multitenant-ecommerce-zeta-gilt.vercel.app/)

2. **Sign up or log in:**  
   Create an account to start your own store

3. **Create your store:**  
   Choose a store name and customize your storefront

4. **Add products:**  
   Upload product details, images, and set pricing

5. **Share your store:**  
   Customers can browse, purchase, and leave reviews

6. **Manage orders:**  
   Track sales and manage fulfillment from your dashboard

---

## Running Locally

### 1. Clone the repository

```sh
git clone https://github.com/your-username/multitenant-ecommerce.git
cd multitenant-ecommerce
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Copy `.env.example` to `.env` and fill in the required values:

```
DATABASE_URI=your-...
PAYLOAD_SECRET=...
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ROOT_DOMAIN=localhost
NEXT_PUBLIC_ENABLE_SUBDOMAIN_ROUTING=false
```

### 4. Seed the database (optional)

```sh
npm run seed
```

### 5. Run the development server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Architecture Highlights

- **Multi-Tenancy:** Powered by Payload CMS and its multi-tenant plugin for true SaaS isolation
- **Type Safety:** End-to-end typesafe APIs with TypeScript and tRPC
- **Payments:** Stripe Connect for secure, per-tenant payment flows
- **Rich Content:** Lexical editor for product descriptions and reviews
- **Modern UI:** Built with Tailwind CSS and shadcn/ui for a polished experience
- **Subdomain Routing:** Middleware and utility functions for tenant-specific URLs
- **Media Storage:** Vercel Blob Storage for scalable media hosting

---

## Contributing?

- Pull requests are welcomed! For major changes, please open an issue first to discuss what you would like to change or possible add onto this application.

---

## Contact

For questions or support, open an issue or contact [marcpon8@gmail.com]
