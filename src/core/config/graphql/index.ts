import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';

import { env } from '../env';

const isDevelopment = env.type === 'development';

export const GraphQLConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
  introspection: isDevelopment,
  plugins: isDevelopment ? [ApolloServerPluginLandingPageLocalDefault()] : [],
  formatError: (error) => {
    if (!isDevelopment && error.extensions?.code === 'INTERNAL_SERVER_ERROR') {
      return {
        message: 'Internal server error',
      };
    }

    return error;
  },
};
