FROM node:16 AS builder

WORKDIR /ADMIN/src/app
COPY . .
RUN npm install


RUN npm run build


FROM node:16-alpine


WORKDIR /ADMIN/src/app
COPY --from=builder /ADMIN/src/app ./

EXPOSE 3000


ENTRYPOINT ["npm", "run", "start:dev"]