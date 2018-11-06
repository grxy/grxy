FROM mhart/alpine-node

# Set the default working directory
WORKDIR /usr/src

COPY packages/eslint-config/package.json ./packages/eslint-config/

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn

# Copy the relevant files to the working directory
COPY . .

# Build and export the app
RUN yarn test

# Copy to correct location
RUN mv coverage/lcov-report /public
