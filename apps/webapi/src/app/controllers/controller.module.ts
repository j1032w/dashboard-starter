import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {RealEstateApplicationModule} from '../core/applications/real-estate';


import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import {ListingController} from './real-estate/listing.controller';




@Module({
  imports: [ConfigModule, RealEstateApplicationModule],

  controllers: [HomeController, ListingController],

  providers: [HomeService, Logger],
})
export class ControllerModule {}
