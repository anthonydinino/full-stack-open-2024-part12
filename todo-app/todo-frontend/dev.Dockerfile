FROM node:20

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

ENV VITE_BACKEND_URL=//localhost:8080/api/

# npm start is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]