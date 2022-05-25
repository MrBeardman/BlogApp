import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'; //for database

@Module({
  imports: [
ConfigModule.forRoot({isGlobal : true}), //is accesible everywhere forRoot means we are in the root of the project
TypeOrmModule.forRoot({ 
  type : 'postgres',
  url : process.env.DATABASE_URL, //go to .env file and get the DATABASE_URL value
  autoLoadEntities : true,
  synchronize : true
})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
