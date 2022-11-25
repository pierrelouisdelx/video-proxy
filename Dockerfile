FROM node:18-bullseye-slim

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "run", "start"]