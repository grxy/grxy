FROM mhart/alpine-node:10 as dev

RUN apk add --no-cache util-linux

ENV FORCE_COLOR=1 NPM_CONFIG_LOGLEVEL=warn

# Set the default working directory
WORKDIR /grxy

COPY ./yarn-offline-mirror ./yarn-offline-mirror

COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY projects/create-react-app/package.json ./projects/create-react-app/
COPY projects/gatsby/package.json ./projects/gatsby/

# Copy workspace manifest
COPY .yarnrc babel.config.js package.json yarn.lock ./

# Install packages and clean up unnecessary caches
RUN yarn --offline && rm -rf `yarn cache dir` ./yarn-offline-mirror

# Copy the relevant files to the working directory
COPY ./packages ./packages
COPY ./projects ./projects
