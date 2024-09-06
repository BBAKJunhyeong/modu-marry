import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from 'infrastructure/persistence/graphql/graphql.module';

interface PersistenceOptions {
  type: 'graphql' | 'postgres';
  global?: boolean;
}

@Module({})
export class PersistenceModule {
  static async register({
    type,
    global = false,
  }: PersistenceOptions): Promise<DynamicModule> {
    switch (type) {
      case 'graphql': {
        return {
          global,
          module: PersistenceModule,
          imports: [GraphQLModule],
          exports: [GraphQLModule],
        };
      }
      case 'postgres': {
        return {
          global,
          module: PersistenceModule,
          imports: [],
          exports: [],
        };
      }
    }
  }
}
