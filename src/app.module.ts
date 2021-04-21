import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurnatsModule } from './restaurnats/restaurnats.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    RestaurnatsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
