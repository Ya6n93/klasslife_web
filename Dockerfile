FROM node:16.14.2-alpine as klasslife_web
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=klasslife_web /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]