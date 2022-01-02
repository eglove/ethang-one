FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN npx pnpm i && npx prisma db pull --schema ./packages/website-server/src/prisma/schema.prisma && npx prisma generate --schema ./packages/website-server/src/prisma/schema.prisma && npx @paljs/cli schema typescript --schema ./packages/website-server/src/prisma/schema.prisma && npx nx build website-server

EXPOSE 8080

CMD ["npx", "nx", "run", "website-server:serve"]
