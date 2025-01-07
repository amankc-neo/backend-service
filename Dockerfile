# Use the official Node.js image as the base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["node", "app.js"]

