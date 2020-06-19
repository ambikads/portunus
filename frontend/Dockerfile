FROM node:13

RUN mkdir /code
WORKDIR /code

COPY package.json .
RUN yarn install
RUN npm run build

COPY . .

EXPOSE 3000
CMD npm start -p 3000
