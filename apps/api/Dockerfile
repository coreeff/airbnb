FROM oven/bun:1

WORKDIR /app

COPY /prisma package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun prisma generate

EXPOSE 3333

ENV NODE_ENV=production

RUN bun run build

CMD ["bun", "run", "start"]