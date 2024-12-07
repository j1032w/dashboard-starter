FROM node:20-alpine3.20 AS builder

WORKDIR /das-ui

# Only add basic files without the source code to avoid rebuilding
COPY package.json ./
COPY .yarn .yarn
RUN yarn install --legacy-peer-deps --ignore-scripts


# Copy the Nx workspace
COPY ./nx.json nx.json
COPY ./jest.config.ts jest.config.ts
COPY ./tsconfig.base.json tsconfig.base.json

COPY apps/ui/src ./apps/ui/src
COPY apps/ui/tsconfig.json ./apps/ui/tsconfig.json
COPY apps/ui/tsconfig.app.json ./apps/ui/tsconfig.app.json
COPY apps/ui/project.json ./apps/ui/project.json
COPY apps/ui/nginx/nginx.conf ./apps/ui/nginx/nginx.conf


RUN yarn ui:build:prod



# --------------------------------------------------------------------------------------
# Use a second image that only contains the compiled application
FROM nginx:1.21-alpine

# 1.21-alpine has have the "nginx" usr and group
# Add a new user and group for Nginx to run as
#RUN addgroup -g 1001 nginx && \
#    adduser -D -u 1001 -G nginx -h /var/cache/nginx -s /sbin/nologin nginx

# Change the ownership of the directories that Nginx needs to write to
RUN chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx /etc/nginx \
&& chmod g+wr /var/cache/nginx /var/run /var/log/nginx /etc/nginx



# Switch to the non-root user
USER nginx


# Copy the compiled application from the first image to the nginx server directory
COPY --from=builder /das-ui/dist/apps/ui /usr/share/nginx/html


# Copy the nginx configuration file to the container
COPY --from=builder /das-ui/apps/ui/nginx/nginx.conf /etc/nginx/nginx.conf

# Use docker-compose to expose the port
# EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
