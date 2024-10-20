# Stage 1: Build the Angular application using Bun
FROM node:20.12.2 AS build

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set Bun's path
ENV PATH="/root/.bun/bin:$PATH"

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy all project files to the container
COPY . .

# Disable Angular CLI analytics prompt
RUN ng analytics off

# Build the Angular application for production
RUN ng build --configuration=production

# Stage 2: Serve the application with Nginx
FROM nginx:latest

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the first stage
COPY --from=build /app/dist/airbnb /usr/share/nginx/html/airbnb

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
