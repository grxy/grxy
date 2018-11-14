FROM mhart/alpine-node:10 as dev

ENV FORCE_COLOR=1
ENV NPM_CONFIG_LOGLEVEL warn

# Set the default working directory
WORKDIR /grxy

COPY ./yarn-offline-mirror ./yarn-offline-mirror

COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY projects/create-react-app/package.json ./projects/create-react-app/

# Copy workspace manifest
COPY .yarnrc babel.config.js package.json yarn.lock ./

# Install packages
RUN yarn --offline
RUN rm -rf $YARN_CACHE_FOLDER

# Copy the relevant files to the working directory
COPY . .

# Clean up unnecessary caches
RUN rm -rf `yarn cache dir` ./yarn-offline-mirror
