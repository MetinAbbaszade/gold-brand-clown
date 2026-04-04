# Gold Brand Clown

Luxury jewelry storefront built with Next.js App Router, React 19, TypeScript, and Material UI. The project renders a multi-page ecommerce-style experience with seeded product, collection, testimonial, cart, and user data stored locally in the codebase.

## Overview

This app includes:

- Landing page with hero, featured collections, brand story, testimonials, and newsletter section
- Collections page with mock collection data and featured collection highlight
- Products page with collection selector, price slider UI, and product cards
- Product detail page with gallery, tabs, related products, and recently viewed sections
- Auth flow with sign in and sign up screens backed by in-memory mock users
- Profile area with profile, orders, wishlist, and settings tabs
- Cart drawer powered by React context and persisted in `localStorage`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Material UI
- Framer Motion
- Styled Components
- Formik + Yup
- Tailwind CSS v4 for global setup
- Biome for formatting

## Project Structure

```text
src/
  app/                  App Router pages
  components/           Page-level and shared UI components
  context/              Auth and cart providers
  api/                  Local mock API wrappers
  store/                Seed data for products, users, collections, cart
  providers/            MUI theme registry
public/
  mainImage.avif
```

## Routes

- `/` home page
- `/collections` collections listing
- `/products` product catalog
- `/products/[id]` product details
- `/auth` sign in and registration
- `/profile` authenticated profile area

## Data Model

The project does not use a real backend yet.

- Product, collection, testimonial, and user data come from files in [`src/store`](/Users/methiinn/Desktop/frontend/portfolio/GoldBrand/gold-brand-clown/src/store).
- The modules in [`src/api`](/Users/methiinn/Desktop/frontend/portfolio/GoldBrand/gold-brand-clown/src/api) simulate data fetching from those local stores.
- Some fetch functions intentionally wait about 1 second to mimic network latency.
- Auth and cart state persist in the browser via `localStorage`.

## Getting Started

### Requirements

- Node.js 20+ recommended
- npm

### Install

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
```

## Notes

- No environment variables are required for local development.
- Newly registered users are added only to the in-memory store for the current running session.
- Cart data is seeded from local mock data on first load, then persisted in the browser.
- The app uses Google fonts through `next/font` and a shared MUI theme provider.

## Future Improvements

- Replace local stores with a real API and database
- Add real search and filtering logic on the products page
- Connect add-to-cart actions from product details to cart context
- Add automated tests for auth, cart, and page rendering
- Improve form validation and protected route handling
