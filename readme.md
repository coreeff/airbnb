# Airbnb Clone Project 🚀

This repository contains the codebase for an Airbnb clone application. The project consists of multiple services, including a **NestJS** API, a **Strapi** backend, and an **Angular** frontend and is running concurrently using **concurrently** package.

## Folder Structure

The project is divided into several key directories:

```bash
├── apps
│   ├── api      # NestJS API 
│   ├── server   # Strapi CMS backend (this will be removed once the API is fully functional)
│   └── web      # Angular frontend
├── node_modules # Dependencies for the root project
├── assets       # Static assets (mainly used for readme docs)
└── package.json # Root package for project-wide scripts and dependencies
```

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js**: V20.12.2 is recommended.
2. **Bun**: V1.1.27 is recommended.

## NestJs API Reference

```bash
   # postman workspace
   https://www.postman.com/lunar-robot-296772/airbnb-clone
```

## Env Configuration

1. **For NestJs API:**

   ```bash
   JWT_SECRET=
   JWT_REFRESH_SECRET=
   DATABASE_URL="mysql://myuser:mypassword@localhost:3306/myapp" # CREATE, UPDATE, DELETE
   READ_DATABASE_URL="mysql://myuser:mypassword@localhost:3307/myapp" # READ
   PORT=

   # Cloudinary config
   CLOUDINARY_API_KEY=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_SECRET=

   CLOUDINARY_UPLOAD_PRESET=
   CLOUDINARY_IMAGE_UPLOAD_LINK=

   # Frontend
   FRONTEND_URL= http://localhost:4200/
   ```

1. **For Angular Frontend:**

Please, values in /environment dir.

## 📜 How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ujjwalbhandarii/airbnb
   cd airbnb
   ```

2. **Install root dependencies:**
   Run the following command to install all required dependencies at the root level:

   ```bash
   cd airbnb
   bun install
   ```

3. **Navigate to specific apps and install their dependencies:**

   ```bash
   cd apps/api # Install NestJS dependencies
   bun install


   cd apps/server # Install Strapi dependencies
   npx prisma generate # Generate the prisma schema type for development
   bun install

   cd apps/web # Install Angular dependencies
   bun install
   ```

4. **Start the dev script using concurrenly pacakge:**

   ```bash
   cd airbnb
   bun run dev
   ```

# Project Showcase

![Project Showcase](./assets/project.png "a title")
