import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';

import { GraphQLModule as NestGraphqlModule } from '@nestjs/graphql';

@Module({
  imports: [
    NestGraphqlModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class GraphQLModule {}
