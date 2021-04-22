import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { RestaurnatsModule } from './restaurnats/restaurnats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === "dev" ? ".dev.env" : ".test.env",
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username:'yun',
      password: 'dml134679',
      database: 'eats',
      synchronize: true,
      logging: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    RestaurnatsModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
