FROM mhart/alpine-node:16 as base
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm i --production
COPY . .

FROM mhart/alpine-node:base-8
WORKDIR /usr/src
COPY --from=base /usr/src .
EXPOSE 3000
CMD ["node", "./node_modules/.bin/micro"]