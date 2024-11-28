import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {RealEstateApplicationModule} from '../core/applications/real-estate';


import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import {RealEstateListingController} from './real-estate/real-estate-listing.controller';




@Module({
  imports: [ConfigModule, RealEstateApplicationModule],

  controllers: [HomeController, RealEstateListingController],

  providers: [HomeService, Logger],
})
export class ControllerModule {}
