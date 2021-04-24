import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import {RestaurantResolver} from './restaurants.resolver'
import { RestaurantService } from './restaurants.service';

// RestaurantService는 resolver class 에 inject할수있도록 provider에추가

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers:[RestaurantResolver, RestaurantService] 
})
export class RestaurnatsModule {}
