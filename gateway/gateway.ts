import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { logger } from "../utils/logger";
import waitPort from "wait-port";

const services = [
  { name: "activity", url: "http://localhost:4001" },
  { name: "admin", url: "http://localhost:4002" },
  { name: "school", url: "http://localhost:4003" },
  { name: "person", url: "http://localhost:4004" },
];

const supergraphSdl = new IntrospectAndCompose({
  subgraphs: services,
  pollIntervalInMs: 10000,
  subgraphHealthCheck: true,
});

const gateway = new ApolloGateway({
  supergraphSdl,
  __exposeQueryPlanExperimental: false,
});

const startUp = async (): Promise<void> => {
  const server = new ApolloServer({
    gateway,
    debug: true,
    plugins: [
      ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  try {
    await waitPort({ host: "localhost", port: 4001 });
    await waitPort({ host: "localhost", port: 4002 });
    await waitPort({ host: "localhost", port: 4003 });
    await waitPort({ host: "localhost", port: 4004 });
    server
      .listen()
      .then(({ url }) => {
        logger.info(`gateway started at ${url} `);
      })
      .catch((e) => {
        logger.error(e.message);
      });
  } catch (error) {
    logger.error(error);
  }
};

startUp()
  .then(() => logger.info("Gateway is running"))
  .catch(() => logger.error("Error starting gateway"));
