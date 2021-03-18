FROM node:alpine

#This prevents create-react-app from crash at Docker build
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]