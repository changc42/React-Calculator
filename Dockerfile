FROM node

WORKDIR /app

COPY . .

WORKDIR /app/frontend

RUN npm i

RUN npm run build

WORKDIR /app

RUN npm i

CMD npm start

# docker build . -t changc42/private:calculator