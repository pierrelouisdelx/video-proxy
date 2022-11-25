FROM node:18-bullseye-slim

WORKDIR /app
COPY package.json ./
RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "run", "start"]