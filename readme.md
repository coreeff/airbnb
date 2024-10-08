# Airbnb Clone Project 🚀

This repository contains the codebase for an Airbnb clone application. The project consists of multiple services, including a **NestJS** API, a **Strapi** backend, and an **Angular** frontend and is running concurrently using **concurrently** package.

## Folder Structure

The project is divided into several key directories:

```bash
├── apps
│   ├── api      # NestJS API (main backend API)
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
   JWT_SECRET=super-secret
   JWT_REFRESH_SECRET=super-sa-vi-uper-ka-secret
   DATABASE_URL="mysql://myuser:mypassword@localhost:3306/myapp" # CREATE, UPDATE, DELETE
   READ_DATABASE_URL="mysql://myuser:mypassword@localhost:3307/myapp" # READ
   PORT=3333

   # Cloudinary config
   CLOUDINARY_API_KEY=536853457982797
   CLOUDINARY_CLOUD_NAME=ujjwalbhandari
   CLOUDINARY_API_SECRET=y0Wzum7hQDh_Ntz4vuE_3942AGQ

   CLOUDINARY_UPLOAD_PRESET=medi_nepal_uploads
   CLOUDINARY_IMAGE_UPLOAD_LINK=https://api.cloudinary.com/v1_1/ujjwalbhandari

   # Frontend
   FRONTEND_URL= http://localhost:4200/
   ```

2. **For Starpi Backend:**

```bash
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=UU4kCJVC/T0QxthPjC1v9w==,VTtJN97CxdNb2/55ZJ927Q==,eDz9J+NUgCyOlewShLsKdQ==,cHVCegUdb7rV2sW9E8Op8g==
API_TOKEN_SALT=dG1lC+RCQJ3iFz+QhlUAPg==
ADMIN_JWT_SECRET=Wyy9Hbuni9jgzWVEJxYkKg==
TRANSFER_TOKEN_SALT=ASWVK1JQcWIktA5RMRSDdQ==

# Database
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=MbSlWP1FMT810rq1iCMivg==
```

3. **For Angular Frontend:**

```bash
    STRAPI_API=http://localhost:1337/api
```

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
