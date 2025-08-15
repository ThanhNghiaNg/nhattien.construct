# Use a lightweight Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /

RUN git checkout deploy

RUN git pull origin

# Copy the pre-built standalone output and static files
COPY standalone.zip ./

RUN tar -xzf standalone.zip && \
    rm standalone.zip

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0

# Start the standalone server
CMD ["node", ".next/standalone/server.js"]