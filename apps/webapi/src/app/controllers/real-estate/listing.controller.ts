import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import MongodbFindDto from '../../common/mongo/mongodb-find-dto';
import { LISTING_QUERY_SERVICE } from '../../core/applications/real-estate';
import { RealEstateListing } from '../../core/domains';
import {
  RESPONSE_200_DESCRIPTION,
  RESPONSE_201_DESCRIPTION,
  RESPONSE_400_DESCRIPTION,
} from '../response-description.constant';
import ListingRequestDto from './listing-request.dto';
import ListingResponseDto from './listing-response.dto';
import ListingQueryServiceInterface from '../../core/applications/real-estate/listing-query-service.interface';
import { DeleteResult, Document } from 'mongodb';

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
export class ListingController {
  constructor(
    @Inject(LISTING_QUERY_SERVICE)
    private readonly listingQueryService: ListingQueryServiceInterface,
  ) {}

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
    type: ListingResponseDto,
    examples: {
      listing: {
        summary: 'A listing',
        value: listExample,
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get(':persistenceId')
  async findOne(@Param('persistenceId') persistenceId: string) {
    return this.listingQueryService.findOneByIdAsync(persistenceId);
  }

  @ApiOperation({
    summary: 'Insert a new listing',
    operationId: 'real_estate_list_update_one',
    description: `Insert a new listing`,
    tags: ['Real Estate Listing'],
  })
  @ApiBody({
    description: 'Add a new listing',
    type: ListingRequestDto,
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
    type: ListingResponseDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async insertOne(@Body() listingDto: ListingRequestDto): Promise<ListingResponseDto> {
    const listing = plainToInstance(RealEstateListing, listingDto);
    return this.listingQueryService.insertOneAsync(listing);
  }

  @ApiOperation({
    summary: 'Update a listing',
    operationId: 'real_estate_list_update_one',
    description: `Update a listing`,
    tags: ['Real Estate Listing'],
  })
  @ApiBody({
    description: 'The listing to update',
    type: ListingRequestDto,
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
    type: ListingResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  @Patch()
  async updateOne(@Body() listingRequestDto: ListingRequestDto) {
    const listing = plainToInstance(RealEstateListing, listingRequestDto);
    const result = await this.listingQueryService.updateOneAsync(listing);
    return plainToInstance(ListingResponseDto, result, {
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
    type: MongodbFindDto,
    examples: {
      requestDto: {
        value: {
          filter: {
            city: {
              $eq: 'Calgary',
            },
          },
          options: {
            projection: {
              city: 1,
              id: 1,
              buildingType: 1,
              postalCode: 1,
              listedTime: 1,
            },
            sort: {
              listedTime: 1,
            },
            skip: 1,
            limit: 5,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: RESPONSE_200_DESCRIPTION,
    type: ListingResponseDto,
    isArray: true,
    examples: {
      listing: {
        summary: 'A list of listings',
        value: [listExample],
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: RESPONSE_400_DESCRIPTION,
  })
  @HttpCode(HttpStatus.OK)
  @Post('findAll')
  async findAllAsync(@Body() body: MongodbFindDto<ListingRequestDto>): Promise<Partial<ListingResponseDto>[]> {
    return this.listingQueryService.findAllAsync(body.filter, body.options);
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
  @Delete(':persistenceId')
  async deleteById(@Param('persistenceId') persistenceId: string): Promise<DeleteResult> {
    return await this.listingQueryService.deleteOneAsync(persistenceId);
  }

  @ApiOperation({
    summary: 'Aggregate operations',
    operationId: 'real_estate_list_aggregate',
    description: `Aggregate operations`,
    tags: ['Real Estate Listing', 'Find'],
  })
  @ApiBody({
    description: 'The pipeline for aggregation',
    // Document is a type from mongodb, but swagger requires a class
    // Or a sophisticated way to define an aggregate pipeline class
    type: Array,
    examples: {
      pipeline: {
        value: [
          {
            $match: {
              buildingType: 'House',
            },
          },
          {
            $group: {
              _id: '$city',
              count: {
                $sum: 1,
              },
            },
          },
        ],
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
    isArray: true,
    type: Array, // Document is a type
    examples: {
      listing: {
        summary: 'Aggregate results',
        value: [
          {
            _id: 'Toronto',
            count: 304,
          },
          {
            _id: 'Montreal',
            count: 266,
          },
          {
            _id: 'Vancouver',
            count: 149,
          },
          {
            _id: 'Calgary',
            count: 305,
          },
        ],
      },
    },
  })
  @HttpCode(HttpStatus.OK)
  @Post('aggregate')
  async aggregateAsync(@Body() pipeline: Document[]): Promise<Document[]> {
    return this.listingQueryService.aggregateAsync(pipeline);
  }
}
