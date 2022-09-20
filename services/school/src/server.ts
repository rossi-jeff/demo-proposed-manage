import { loadFiles } from "@graphql-tools/load-files";
import { ApolloServer } from "apollo-server";
import { DocumentNode } from "graphql";
import { buildSubgraphSchema } from "@apollo/federation";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { logger } from '../../../utils/logger'

import { resolvers } from './resolvers'

const startServer = async () => {
    const typeDefs = (await loadFiles(
        "services/school/src/**/*.schema.graphql"
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
        .listen({ port: 4003 })
        .then(({ url }) => {
          logger.info(`School service started at ${url}`);
        })
        .catch((e) => {
          logger.error(e.message);
        });
}

startServer()
  .then(() => logger.info("School service is running"))
  .catch(() => logger.error("Error starting School service"));