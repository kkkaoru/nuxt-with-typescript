FROM node:12.15.0

WORKDIR /app
ENV NUXT_HOST 0.0.0.0

COPY package.json yarn.lock ./

RUN yarn install

COPY . .
RUN yarn run build

EXPOSE 7000

CMD ["yarn", "run", "start"]
