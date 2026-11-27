# Vite React Boilerplate 2026

A minimal, opinionated, and scalable **Vite + React + TypeScript** boilerplate focused on clean architecture, strong typing, and good practices from day one.

---

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Installed Packages](#installed-packages)

---

## Requirements

- **Node.js** >= 18 (recommended: latest LTS)
- **Bun** (used as package manager)

---

## Getting Started

This repository is a **public template**, so you can either use it directly to create a new repository or clone it locally.

### Option 1: Use as a GitHub template (recommended)

Click **“Use this template”** on GitHub to generate a new repository from this boilerplate.

Once cloned locally from your new repo:

```bash
bun install
bun run rename
bun run dev
```

### Option 2: Clone and rename locally

```bash
git clone https://github.com/Kevin-Jhonatan/vite-react-boilerplate.git my-project
```

```bash
cd my-project
```

Clone the repository and install dependencies:

```bash
bun install
```

Rename the project (updates package.json, title, and related references):

```bash
bun run rename
```

Run the development server:

```bash
bun run dev
```

### Other commands

```bash
bun run build  # Build for production
bun run preview  # Preview the production build
```

---

## Overview

Built with type safety, scalability, and developer experience in mind. A minimal but solid **Vite + React** boilerplate, focused on correctness, structure, and long-term maintainability.

- **[Vite](https://vitejs.dev)** – Fast and modern frontend tooling with first-class TypeScript support
- **[React 19](https://react.dev)** – Component-based UI library for building interactive interfaces
- **[TypeScript](https://www.typescriptlang.org)** – Strongly typed JavaScript for scalable applications
- **[Bun](https://bun.sh)** – Fast runtime and package manager used for development and scripts
- **[Tailwind CSS v4](https://tailwindcss.com)** – Utility-first CSS framework for rapid UI development
- **[ESLint](https://eslint.org)** – Static code analysis with modern flat configuration
- **[React Hook Form](https://react-hook-form.com)** – Performant and flexible form state management
- **[Zod](https://zod.dev)** – TypeScript-first schema validation and type inference
- **[TanStack Table](https://tanstack.com/table)** – Headless, typed table state and row models
- **[vite-plugin-pwa](https://vite-pwa-org.netlify.app/)** – Progressive Web App support for Vite
- **Custom reusable components** – Isolated, typed UI components (Input, Form)
- **Schema-driven validation** – Single source of truth using Zod schemas
- **Project rename automation** – Bash script to safely rename the project

All code follows:

- Colocation
- Explicit typing
- Small, reusable units
- No unnecessary abstractions

---

## Project Structure

```text
.
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable UI components
│   │   ├── Form/
│   │   ├── Input/
│   │   ├── MetricCard/
│   │   ├── Table/
│   │   │   └── TablePagination.tsx
│   │   └── Tooltip/
│   ├── features/           # Feature-based modules
│   │   ├── auth/
│   │   │   ├── components/ # Auth-only components
│   │   │   ├── context/    # Auth-only providers
│   │   │   ├── hooks/      # Auth-only hooks
│   │   │   ├── pages/      # Auth routes and screens
│   │   │   ├── schemas/    # Auth validation schemas
│   │   │   ├── types/      # Auth contracts and types
│   │   │   ├── utils/      # Auth-only pure utilities
│   │   │   └── services/   # Auth API/adapters
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   └── page-not-found/
│   │       └── pages/
│   │   └── users/
│   │       ├── data/
│   │       ├── pages/
│   │       └── types/
│   ├── context/             # Shared providers
│   ├── hooks/               # Shared hooks
│   ├── interfaces/          # Shared component contracts
│   ├── layout/              # Shared page layouts
│   │   └── components/      # Layout-specific composition
│   ├── route/               # Router composition only
│   ├── utils/              # Pure utilities shared by multiple features
│   ├── components/          # Shared UI components
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.ts
├── tsconfig*.json
└── package.json
```

The internal structure of a feature follows this template:

```text
feature-name/
├── components/       # UI used only by this feature
├── context/          # Feature-scoped providers
├── hooks/            # Feature behavior and data hooks
├── pages/            # Route-level screens
├── schemas/          # Input and API validation
├── services/         # API clients and adapters
├── types/            # Feature contracts
└── utils/            # Pure feature-specific helpers
```

Not every feature needs every directory. Create a branch only when the feature
has code for that responsibility.

**Guidelines**:

- `src/components` → reusable UI shared by multiple features
- `features` → business modules and their local composition
- `features/<module>` → may contain `components`, `pages`, `hooks`, `context`, `types` and `utils`
- `pages` → route-level composition; keep reusable UI in `components`
- `schemas` and `types` → stay inside the feature unless several features truly share them
- `services` → isolate API access from pages and presentational components
- `src/hooks`, `src/context` and `src/utils` → shared code only
- `src/layout/components` → reusable pieces of a specific layout, such as navigation
- `src/route` → route definitions and composition, not page markup or business logic

Feature-local code stays inside its feature. Move code to a shared directory only
when there is real reuse across multiple features.

Features may depend on shared code, but should not import another feature's
internal files. If two features need the same behavior, extract a deliberately
shared module instead of creating cross-feature coupling.

---

## Installed Packages

### Core

- **vite**
- **react**
- **react-dom**
- **typescript**

### Styling

- **tailwindcss**
- **@tailwindcss/vite**

### Forms & Validation

- **react-hook-form**
- **@hookform/resolvers**
- **zod**

### Tooling

- **eslint** (flat config)
- **@eslint/js**
- **typescript-eslint**

### PWA

- **vite-plugin-pwa**

---

This boilerplate is intentionally strict, minimal, and extensible. Add only what your project truly needs.

---

**Built with ❤️ by Kevin Jhonatan**

**⭐ Star this repo if you find it helpful!**
