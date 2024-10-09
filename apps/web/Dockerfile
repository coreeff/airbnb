FROM node:20.12.2 as base

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

# Expose the default Angular development server port
EXPOSE 4200

# Start Angular in development mode
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000", "--disable-host-check"]
