FROM node:13

RUN mkdir /code
WORKDIR /code
COPY . .
RUN yarn install
# RUN npm build

# EXPOSE 3000
CMD yarn dev -p 3000
# CMD ["npm", "start"]
