FROM node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./

EXPOSE 3001


ENTRYPOINT ["npm", "run", "start:dev"]
