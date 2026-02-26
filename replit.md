# replit.md

## Overview

Top Gun Aviation is a single-page marketing website for an aviation consultancy company based in South Africa. The site showcases their services (auditing, manual development, CAA application services) and provides a contact form for enquiries. It's built as a full-stack TypeScript application with a React frontend and Express backend, using PostgreSQL for storing contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Overall Structure
The project follows a three-directory monorepo pattern:
- `client/` — React SPA frontend
- `server/` — Express API backend
- `shared/` — Shared types, schemas, and route definitions used by both client and server

### Frontend (`client/src/`)
- **Framework**: React with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently just `/` (Home) and a 404 fallback
- **Styling**: Tailwind CSS with CSS variables for theming (gold & black color palette). Custom fonts: Playfair Display (display) and Inter (body)
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives — full component library in `client/src/components/ui/`
- **State/Data Fetching**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Animations**: Framer Motion for scroll reveals and page transitions
- **Smooth Scrolling**: react-scroll for navigation anchor links
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend (`server/`)
- **Framework**: Express 5 running on Node.js with TypeScript (tsx for dev, esbuild for production)
- **API Pattern**: A single POST endpoint at `/api/contact` for contact form submissions
- **Route Definitions**: Shared route contracts in `shared/routes.ts` define method, path, input schema, and response schemas — used by both client and server
- **Storage Layer**: `server/storage.ts` implements an `IStorage` interface with `DatabaseStorage` class, abstracting database operations
- **Dev Server**: Vite dev server is integrated as middleware in development; in production, static files are served from `dist/public/`

### Database
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Single table `contact_messages` with fields: `id` (serial), `name` (text), `email` (text), `phone` (text), `message` (text), `createdAt` (timestamp)
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization
- **Connection**: `pg` Pool in `server/db.ts`

### Shared Layer (`shared/`)
- `schema.ts` — Drizzle table definitions and Zod insert schemas
- `routes.ts` — Type-safe API route contracts with input/output schemas

### Build Process
- **Dev**: `tsx server/index.ts` with Vite middleware for HMR
- **Production Build**: `script/build.ts` runs Vite build for client, then esbuild for server. Server dependencies are selectively bundled (allowlist pattern) to reduce cold start times
- **Output**: `dist/public/` for client assets, `dist/index.cjs` for server

## External Dependencies

### Required Services
- **PostgreSQL Database**: Required. Connection via `DATABASE_URL` environment variable. The app will not start without it.

### Key npm Packages
- **drizzle-orm** + **drizzle-kit**: ORM and migration tooling for PostgreSQL
- **express**: HTTP server framework (v5)
- **@tanstack/react-query**: Server state management on the client
- **framer-motion**: Animation library for scroll reveals
- **react-scroll**: Smooth scrolling navigation
- **zod**: Runtime validation used across client and server
- **shadcn/ui** components (Radix UI primitives): Full UI component library

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal`: Runtime error overlay in dev
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner`: Dev-only Replit integration plugins (conditionally loaded)

### No Authentication
The app currently has no authentication or authorization. It's a public marketing site with a contact form.