import {
  Controller,
  Get,
  Logger,
  Post
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


import { HomeService } from './home.service';

@ApiTags('home')
@Controller({
  path: 'home',
  version: '1',
})
export class HomeController {
  constructor(
    private homeService: HomeService,

    private readonly logger: Logger,
  ) {}

  @ApiOperation({
    operationId: 'home_get_app_info',
    description: `Get app info`,
  })
  @Get('app-info')
  getAppInfo() {
    this.logger.log('Getting app info', HomeController.name);
    return this.homeService.appInfo();
  }

  @ApiOperation({
    operationId: 'home_check_mongodb_connection',
    description: `Try to connect to MongoDB`,
  })
  @Post('check-mongodb-connection')
  checkMongoDbConnection() {
    this.logger.log(this.homeService.getMongoDbConnection());
    return this.homeService.getMongoDbConnection();
  }
}
