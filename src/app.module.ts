import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ApplicationModule } from 'application/application.module';
import { PersistenceModule } from 'infrastructure/persistence/persistence.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PersistenceModule.register({
      type: 'graphql',
      global: true,
    }),

    PersistenceModule.register({
      type: 'postgres',
      global: true,
    }),
    ApplicationModule,
  ],
})
export class AppModule {}
