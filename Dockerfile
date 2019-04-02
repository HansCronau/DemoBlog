FROM node:8.15.1
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
