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
│   │   └── Input/
│   ├── examples/           # Usage examples / playgrounds
│   ├── features/           # Feature-based modules
│   ├── helpers/            # Pure utility functions
│   ├── hooks/              # Custom React hooks
│   ├── schemas/            # Zod schemas (validation & contracts)
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.ts
├── tsconfig*.json
└── package.json
```

**Guidelines**:

- `components` → dumb, reusable UI
- `features` → business logic + composition
- `schemas` → single source of truth for validation
- `hooks` → reusable behavior
- `helpers` → framework-agnostic utilities

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
