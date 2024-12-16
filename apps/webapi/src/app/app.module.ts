import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongoModule } from 'nest-mongodb';
import appConfig from './config/app.config';
import mongodbConfig from './config/mongodb.config';
import { ControllerModule } from './controllers/controller.module';

import { NotificationGatewayModule } from './notification-gateway/notification-gateway.module';
import { DasLoggerModule } from './common/logger/das-logger.module';
import ListingGraphqlModule from "./graphql/real-estate-listings/listing-graphql.module";



@Module({
  imports: [
    // ConfigModule must be initialized first, before accessing process.env
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, mongodbConfig],
      envFilePath: ['.env'],
    }),

    MongoModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongodbConfig').mongoUri,
        dbName: configService.get('mongodbConfig').mongoDbName,
        options: {},
      }),
      inject: [ConfigService],
    }),

    DasLoggerModule,
    ControllerModule,
    NotificationGatewayModule,
    ListingGraphqlModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [ListingGraphqlModule],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: 'das-schema.gql',
      sortSchema: true,
    }),
  ],
  providers: [Logger],
})
export class AppModule {}
