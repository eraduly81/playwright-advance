
# Use a Node.js base image
FROM node:v1.49.1-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose a port if your application needs it (not required for Playwright tests themselves)
# EXPOSE 3000

# Define the default command to run your tests
CMD ["npm", "run", "test"]