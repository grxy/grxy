FROM grxy AS dev
WORKDIR /grxy/projects/create-react-app

CMD ["yarn", "dev"]

FROM grxy AS prod
WORKDIR /grxy/projects/create-react-app

RUN yarn build

CMD ["yarn", "start"]
