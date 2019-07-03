# Node (development) for React
FROM node:12.5.0-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Application port
EXPOSE 3000

CMD ["npm", "start"]
