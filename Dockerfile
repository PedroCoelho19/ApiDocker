FROM  node:16

WORKDIR /var/www

COPY package*.json ./

Run yarn install

COPY . .

EXPOSE 3333

CMD [ "yarn", "dev" ]