FROM cargo.caicloudprivatetest.com/caicloud/node:8.11.2-slim
COPY . /app
WORKDIR /app
RUN yarn install
CMD ["npm", "run", "try"]