# mystore
https://mystore-brown.vercel.app/sign-in

A modern Next.js + TypeScript web application using Tailwind CSS, App Router, and custom components for authentication, file management, and dashboard features.

## Features
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Custom authentication (sign-in, sign-up, OTP)
- File uploader and management
- Dashboard with charts and sorting
- Responsive sidebar and mobile navigation
- Toast notifications
- Modular UI components

## Project Structure
```
app/                # Application routes and layouts
components/         # Reusable React components
constants/          # Static values and enums
hooks/              # Custom React hooks
lib/                # Utility functions and server actions
public/             # Static assets (SVGs, images)
types/              # TypeScript type definitions
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   Create a `.env.local` file based on your authentication and file storage provider.
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server

## Technologies Used
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/) (for authentication & file storage)

---

# Project Overview

This website is a modern file management and dashboard platform built with Next.js and TypeScript. It features user authentication, file uploading, and interactive dashboards, all designed with a clean, responsive UI. The application leverages modular components and follows best practices for scalability and maintainability.

## Tools & Technologies

- **Next.js 14**: Framework for server-side rendering, routing, and API routes.
- **TypeScript**: Provides type safety and improved developer experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Appwrite**: Backend-as-a-service for authentication and file storage.
- **React**: Component-based UI library.
- **PostCSS**: CSS processing tool integrated with Tailwind.
- **Custom Hooks & Components**: For authentication, file management, UI elements, and notifications.
- **Modern Folder Structure**: Separation of concerns for scalability (app, components, lib, hooks, constants, types, public).
