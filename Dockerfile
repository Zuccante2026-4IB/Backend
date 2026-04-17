FROM node:18

ENV NODE_ENV=production
# ENV NODE_ENV=development

WORKDIR /srv/app

COPY package.json ./
RUN npm install

COPY . .

# Build Strapi admin panel
RUN npm run build

EXPOSE 1337

#CMD ["npm", "start"]
CMD ["npm", "run", "develop"]

