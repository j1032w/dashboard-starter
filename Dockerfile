# Use an official Node.js runtime as a parent image
FROM node:14-alpine AS build

# Set the working directory
WORKDIR /ng-app
# Add project into container, install dependencies

ADD .yarn yarn.lock package.json angular.json tsconfig.json  tsconfig.app.json /ng-app/
ADD src/ /ng-app/src/
RUN yarn install --update-checksums --no-progress --non-interactive

# Build application
RUN yarn build-prod



# --------------------------------------------------------------------------------------
# Use a second image that only contains the compiled application
FROM nginx:1.21-alpine

# 1.21-alpine has have the "nginx" usr and group
# Add a new user and group for Nginx to run as
#RUN addgroup -g 1001 nginx && \
#    adduser -D -u 1001 -G nginx -h /var/cache/nginx -s /sbin/nologin nginx

# Change the ownership of the directories that Nginx needs to write to
RUN chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx
RUN chmod g+wr /var/cache/nginx /var/run /var/log/nginx



# Switch to the non-root user
USER nginx


# Copy the compiled application from the first image to the nginx server directory
COPY --from=build /ng-app/dist /usr/share/nginx/html

# Copy the nginx configuration file to the container
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
