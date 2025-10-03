FROM node:22.13.0
WORKDIR /Server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4747
CMD ["node", "server.js"]
