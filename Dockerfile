FROM node

WORKDIR /TrueLayer

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g http-server 

RUN npm run build

EXPOSE 8080 8081

CMD ["http-server","dist"]
