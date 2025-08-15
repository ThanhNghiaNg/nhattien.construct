# Use a lightweight Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /

# Copy the pre-built standalone output and static files
COPY standalone.tar.gz ./

RUN tar -xzvf standalone.tar.gz && \
    rm standalone.tar.gz

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

# Start the standalone server
CMD ["node", ".next/standalone/server.js"]