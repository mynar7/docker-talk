FROM node:10

WORKDIR usr/src/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# docker build -t node/test .
# docker run -d -p 3000:3000 node/test
# http://localhost:3000