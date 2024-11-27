#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Database name to check and restore (default to 'das_data' if not set)
DB_NAME="${DB_NAME:-das_data}"

# Path to MongoDB's data directory
DATA_DIR="/data/db"

# Path to backup data
BACKUP_DIR="/backup"

# Start MongoDB in the background
echo "Starting MongoDB in the background..."
mongod --dbpath "$DATA_DIR" --bind_ip_all --fork --logpath /var/log/mongod_init.log

# Wait for MongoDB to start
sleep 5

# Check if the database exists
echo "Checking if '$DB_NAME' database exists..."
DB_EXISTS=$(mongosh --quiet --norc --eval "print(db.getMongo().getDBNames().includes('$DB_NAME'))" | tail -n 1)

if [ "$DB_EXISTS" == "true" ]; then
    echo "Database '$DB_NAME' exists. Skipping restoration."
else
    echo "Database '$DB_NAME' does not exist. Restoring from backup..."

    # Restore the data using --nsInclude
    mongorestore --gzip --drop --nsInclude="$DB_NAME.*" "$BACKUP_DIR"

    echo "Database '$DB_NAME' restored successfully."
fi

# Stop the background MongoDB process
echo "Stopping background MongoDB process..."
mongod --shutdown --dbpath "$DATA_DIR"

# Start MongoDB in the foreground
echo "Starting MongoDB in the foreground..."
exec mongod --dbpath "$DATA_DIR" --bind_ip_all
