# Use official Node.js image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build TypeScript code
RUN npm run build

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Run the app
CMD ["npm", "run", "serve"]
