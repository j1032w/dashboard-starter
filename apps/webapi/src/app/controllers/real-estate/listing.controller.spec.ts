import { Test, TestingModule } from '@nestjs/testing';
import { ListingController } from './listing.controller';
import { LISTING_QUERY_SERVICE } from '../../core/applications/real-estate';
import { RealEstateListing } from '../../core/domains';

import ListingQueryServiceInterface from '../../core/applications/real-estate/listing-query-service.interface';
import { DeleteResult, Document } from 'mongodb';
import MongodbFindDto from '../../common/mongo/mongodb-find-dto';
import { plainToInstance } from 'class-transformer';
import ListingResponseDto from './listing-response.dto';
import ListingRequestDto from './listing-request.dto';

describe('ListingController', () => {
  let controller: ListingController;
  let listingQueryService: ListingQueryServiceInterface;

  const mockListing: Partial<RealEstateListing> = {
    id: '25472603',
    city: 'Calgary',
    buildingType: 'House',
    postalCode: 'T1T1T1',
    listedTime: new Date('2021-05-01T00:00:00.000Z'),
  };

  const mockListingResponse = new ListingResponseDto({
    id: '25472603',
    city: 'Calgary',
    buildingType: 'House',
    postalCode: 'T1T1T1',
    listedTime: new Date('2021-05-01T00:00:00.000Z'),
  });

  beforeEach(async () => {
    const mockListingQueryService: Partial<ListingQueryServiceInterface> = {
      findOneByIdAsync: jest.fn().mockResolvedValue(mockListing),
      insertOneAsync: jest.fn().mockResolvedValue(mockListingResponse),
      updateOneAsync: jest.fn().mockResolvedValue(mockListingResponse),
      findAllAsync: jest.fn().mockResolvedValue([mockListingResponse]),
      deleteOneAsync: jest.fn().mockResolvedValue({ deletedCount: 1 } as DeleteResult),
      aggregateAsync: jest.fn().mockResolvedValue([{ _id: 'Calgary', count: 305 }]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingController],
      providers: [
        {
          provide: LISTING_QUERY_SERVICE,
          useValue: mockListingQueryService,
        },
      ],
    }).compile();

    controller = module.get<ListingController>(ListingController);
    listingQueryService = module.get<ListingQueryServiceInterface>(LISTING_QUERY_SERVICE);
  });

  describe('findOne', () => {
    it('should return a listing when a valid persistenceId is provided', async () => {
      const persistenceId = '25472603';
      const result = await controller.findOne(persistenceId);
      expect(listingQueryService.findOneByIdAsync).toHaveBeenCalledWith(persistenceId);
      expect(result).toEqual(mockListing);
    });
  });

  describe('insertOne', () => {
    it('should insert a new listing and return it', async () => {
      const listingDto: ListingRequestDto = {
        ...mockListing,
      } as ListingRequestDto;

      const result = await controller.insertOne(listingDto);
      expect(listingQueryService.insertOneAsync).toHaveBeenCalledWith(plainToInstance(RealEstateListing, listingDto));
      expect(result).toEqual(mockListingResponse);
    });
  });

  describe('updateOne', () => {
    it('should update a listing and return the updated listing', async () => {
      const listingDto: ListingRequestDto = {
        ...mockListing,
        remark: 'Updated remark',
      } as unknown as ListingRequestDto;

      const result = await controller.updateOne(listingDto);
      expect(listingQueryService.updateOneAsync).toHaveBeenCalledWith(plainToInstance(RealEstateListing, listingDto));
      expect(result).toEqual(mockListingResponse);
    });
  });

  describe('findAllAsync', () => {
    it('should return an array of listings matching the filter and options', async () => {
      const filter = { city: { $eq: 'Calgary' } };
      const options = {
        projection: { city: 1, id: 1 },
        sort: { listedTime: 1 as const },
        skip: 1,
        limit: 5,
      };
      const body: MongodbFindDto<ListingRequestDto> = { filter, options };

      const result = await controller.findAllAsync(body);
      expect(listingQueryService.findAllAsync).toHaveBeenCalledWith(filter, options);
      expect(result).toEqual([mockListingResponse]);
    });
  });

  describe('deleteById', () => {
    it('should delete the listing with the given persistenceId and return the delete result', async () => {
      const persistenceId = '25472603';
      const result = await controller.deleteById(persistenceId);
      expect(listingQueryService.deleteOneAsync).toHaveBeenCalledWith(persistenceId);
      expect(result).toEqual({ deletedCount: 1 });
    });
  });

  describe('aggregateAsync', () => {
    it('should perform an aggregation and return the result', async () => {
      const pipeline: Document[] = [
        { $match: { buildingType: 'House' } },
        { $group: { _id: '$city', count: { $sum: 1 } } },
      ];

      const result = await controller.aggregateAsync(pipeline);
      expect(listingQueryService.aggregateAsync).toHaveBeenCalledWith(pipeline);
      expect(result).toEqual([{ _id: 'Calgary', count: 305 }]);
    });
  });
});
