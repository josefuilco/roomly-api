import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { GraphQLConfig } from './config/graphql';

@Module({
  imports: [GraphQLModule.forRoot(GraphQLConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
