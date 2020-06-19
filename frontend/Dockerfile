FROM node:13

RUN mkdir /code
WORKDIR /code

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN npm run build

EXPOSE 3000
CMD npm start -p 3000
