import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {ListingService} from '../../core/applications/real-estate';
import {Listing} from '../../core/domains';


import { ListingQuery } from '../../infrastructures/shared';


@ApiTags('Real Estate Listings')
@Controller({
  path: 'real-estate-listings',
  version: '1',
})
export class ListingController {
  constructor(
    private listingService: ListingService,
  ) {}


  @ApiOperation({
    operationId: 'real-estate-listing-find-by-id',
    description: `Get a listing by id`,
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the listing',
    type: 'string',
    example: '25472603',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.listingService.findOneByIdAsync( id );
  }

  @ApiOperation({
    operationId: 'real_estate_list_update_one',
    description: `Insert a new listing`,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @HttpCode(200)
  @Post()
  async insertOne(@Body() listing: Listing) {
    return await this.listingService.insertOneAsync(
      listing,
    );
  }

  @ApiOperation({
    operationId: 'real_estate_list_update_one',
    description: `Update a listing`,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @HttpCode(200)
  @Patch()
  async updateOne(@Body() listing: Listing) {
    return await this.listingService.updateOneAsync(
      listing,
    );
  }

  @ApiOperation({
    operationId: 'real_estate_list_find',
    description: `Find listings by mongodb query`,
  })
  @ApiBody({
    description: '',
    type: ListingQuery,
    examples: {
      mongodbQuery: {
        value: {
          propertyType: 'Single Family',
          buildingBedroom: {$eq: 2},
          provinceName: 'Alberta',
          buildingType: 'House',
        },
      },
    }
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @HttpCode(200)
  @Post('find')
  async find(@Body() query: ListingQuery) {
    return await this.listingService.findAsync(query);
  }

  @ApiOperation({
    operationId: 'real_estate_list_delete_by_id',
    description: `Delete a listing by id`,
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the residential property',
    example: '25472603',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @HttpCode(200)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.listingService.deleteOneAsync(id);
  }
}
