FROM mcr.microsoft.com/playwright:v1.41.1-jammy

WORKDIR /user/e2e/

COPY package.json ./

COPY . .

RUN npm install

RUN npm run test

# RUN npm run chromatic