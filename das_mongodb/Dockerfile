FROM mongo:6.0.5

# Copy the backup data into the container
COPY ./das_mongodb/dump/das_data /backup/das_data

# Copy the custom entrypoint script
COPY ./das_mongodb/init-mongo.sh /init-mongo.sh

# Ensure the script is executable
RUN chmod +x /init-mongo.sh

# init-mongo.sh will restore a demo data to the database: das_data
CMD  ["/init-mongo.sh"]

