import { Module } from '@nestjs/common';
import * as Joi from 'joi'; // js용 스키마설명언어 이자 데이터 유효성 검사툴
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurnatsModule } from './restaurnats/restaurnats.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.test.env',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('dev', 'prod')
          .required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
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
