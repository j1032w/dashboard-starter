import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { RealEstateListingService } from '../../core/applications/real-estate';
import { RealEstateListing } from '../../core/domains';

import { RealEstateListingQuery } from '../../infrastructures/shared';
import {
  RESPONSE_200_DESCRIPTION,
  RESPONSE_201_DESCRIPTION,
  RESPONSE_400_DESCRIPTION,
} from '../response-description.constant';
import RealEstateListingRequestDto from './real-estate-listing-request.dto';
import RealEstateListingResponseDto from './real-estate-listing-response.dto';

const listExample = {
  id: '25472603',
  buildingAmenity: 'Laundry - In Suite',
  buildingBathroomTotal: 2,
  buildingBedroom: 2,
  buildingSizeInterior: 0,
  buildingStoriesTotal: 2,
  buildingType: 'House',
  distance: '1.5 km',
  landLandscapeFeature: 'Landscaped',
  landSizeTotal: '0',
  listingBoundary: '0',
  mlsNumber: 'A1111111',
  postalCode: 'T1T1T1',
  priceUnformattedValue: 0,
  propertyAmenityNearBy: 'Shopping',
  propertyOwnershipType: 'Freehold',
  propertyParkingSpaceTotal: 0,
  propertyParkingType: 'Attached Garage',
  propertyType: 'Single Family',
  provinceName: 'Alberta',
  remark: '0',
  city: 'Calgary',
  listedTime: '2021-05-01T00:00:00.000Z',
  modifiedTime: '2021-05-01T00:00:00.000Z',
};

@ApiTags('Real Estate Listings')
@ApiBearerAuth()
@Controller({
  path: 'real-estate-listings',
  version: '1',
})
export class RealEstateListingController {
  constructor(private readonly listingService: RealEstateListingService) {}

  @ApiOperation({
    summary: 'Get a listing by id',
    operationId: 'real_estate_list_find_one',
    description: 'Get a listing by id',
    tags: ['Real Estate Listing', 'Find'],
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the listing',
    type: 'string',
    example: '25472603',
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: RESPONSE_400_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: RESPONSE_200_DESCRIPTION,
    type: RealEstateListingResponseDto,
    examples: {
      listing: {
        summary: 'A listing',
        value: listExample,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const list = await this.listingService.findOneByIdAsync(id);
    return plainToInstance(RealEstateListingResponseDto, list, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOperation({
    summary: 'Insert a new listing',
    operationId: 'real_estate_list_update_one',
    description: `Insert a new listing`,
    tags: ['Real Estate Listing'],
  })
  @ApiBody({
    description: 'Add a new listing',
    type: RealEstateListingRequestDto,
    required: true,
    examples: {
      listingDto: {
        value: listExample,
        description: 'A new listing',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: RESPONSE_400_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: RESPONSE_201_DESCRIPTION,
    type: RealEstateListingResponseDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async insertOne(@Body() listingDto: RealEstateListingRequestDto) {
    const listing = plainToInstance(RealEstateListing, listingDto);
    const result = await this.listingService.insertOneAsync(listing);
    return plainToInstance(RealEstateListingResponseDto, result, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOperation({
    summary: 'Update a listing',
    operationId: 'real_estate_list_update_one',
    description: `Update a listing`,
    tags: ['Real Estate Listing'],
  })
  @ApiBody({
    description: 'The listing to update',
    type: RealEstateListingRequestDto,
    required: true,
    examples: {
      listing: {
        value: listExample,
        description: 'A listing',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: RESPONSE_400_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: RESPONSE_200_DESCRIPTION,
    type: RealEstateListingResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  @Patch()
  async updateOne(@Body() listingRequestDto: RealEstateListingRequestDto) {
    const listing = plainToInstance(RealEstateListing, listingRequestDto);
    const result = await this.listingService.updateOneAsync(listing);
    return plainToInstance(RealEstateListingResponseDto, result, {
      excludeExtraneousValues: true,
    });
  }

  @ApiOperation({
    summary: 'Find all listings',
    operationId: 'real_estate_list_find_all',
    description: `Find all listings`,
    tags: ['Real Estate Listing', 'Find'],
  })
  @ApiBody({
    description: '',
    type: RealEstateListingQuery,
    examples: {
      requestDto: {
        value: {
          propertyType: 'Single Family',
          provinceName: 'Alberta',
          buildingType: 'House',
          propertyOwnershipType: 'Freehold',
          propertyAmenityNearBy: 'Park, Playground',
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: RESPONSE_400_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: RESPONSE_200_DESCRIPTION,
    type: RealEstateListingResponseDto,
    isArray: true,
  })
  @HttpCode(HttpStatus.OK)
  @Post('findAll')
  async findAllAsync(@Body() requestDto: RealEstateListingRequestDto) {
    const listings = await this.listingService.findAllAsync(requestDto);
    return listings.map((listing) =>
      plainToInstance(RealEstateListingResponseDto, listing, {
        excludeExtraneousValues: true,
      }),
    );
  }

  @ApiOperation({
    summary: 'Delete a listing by id',
    operationId: 'real_estate_list_delete_by_id',
    description: `Delete a listing by id`,
    tags: ['Real Estate Listing'],
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the residential property',
    example: '25472603',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: RESPONSE_400_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: RESPONSE_200_DESCRIPTION,
  })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.listingService.deleteOneAsync(id);
  }
}
