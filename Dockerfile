FROM node:16-alpine

# everything we do will happen in this folder in the image
WORKDIR /app/

# configs and dependency handling
COPY package.json yarn.lock ./

# install all dependencies
RUN yarn install

# copy source code of our app
COPY next.config.js ./
COPY components ./components/
COPY hooks ./hooks/
COPY libs ./libs/
COPY pages ./pages/
COPY public ./public/
COPY styles ./styles/
COPY utils ./utils/
COPY .env.example ./.env.local
COPY postcss.config.js ./
COPY tailwind.config.js ./

# build the app
CMD ["yarn", "dev"]