import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";
import type { DocumentNode } from "graphql";
import { buildSubgraphSchema } from "@apollo/federation";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { logger } from "../../../utils/logger";

import { resolvers } from "./resolvers";

const startServer = async () => {
  const typeDefs = (await loadFiles(
    "services/activity/src/**/*.schema.graphql"
  )) as DocumentNode[];

  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginInlineTrace(),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  server
    .listen({ port: 4001 })
    .then(({ url }) => {
      logger.info(`Activity service started at ${url}`);
    })
    .catch((e) => {
      logger.error(e.message);
    });
};

startServer()
  .then(() => logger.info("Activity service is running"))
  .catch(() => logger.error("Error starting Activity service"));
