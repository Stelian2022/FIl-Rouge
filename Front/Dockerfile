# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./


# Install any needed packages specified in package.json
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the current directory contents into the container at /app
COPY . .

# Construire l'application Angular en mode production
RUN ng build --configuration production

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the Angular app when the container launches
CMD ["npm", "start", "dist/project-angular"]

