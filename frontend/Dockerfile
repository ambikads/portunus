FROM node:13

RUN mkdir /code
WORKDIR /code
ADD package.json /code/
RUN yarn install
RUN npm build
COPY . .

EXPOSE 3000
# CMD yarn dev -p 3000
CMD ["npm", "start"]
