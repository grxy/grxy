FROM grxy AS dev
WORKDIR /grxy/projects/gatsby

CMD ["yarn", "dev"]

FROM grxy AS prod
WORKDIR /grxy/projects/gatsby

RUN yarn build

CMD ["yarn", "start"]
