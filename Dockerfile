# Use node:16-alpine as the builder image
FROM node:16-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use nginx as the base image for serving the built application
FROM nginx

# Expose port 80
EXPOSE 80

# Copy the custom nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the builder stage to nginx's html directory
COPY --from=builder /app/build /usr/share/nginx/html