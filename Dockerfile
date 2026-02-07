FROM node:16.17-alpine as build

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY ./ ./

RUN npm run build

# Host the webiste
FROM nginx:1.29.5-alpine3.23 as production

ENV NODE_ENV=production

COPY --from=build /usr/src/app/build/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]