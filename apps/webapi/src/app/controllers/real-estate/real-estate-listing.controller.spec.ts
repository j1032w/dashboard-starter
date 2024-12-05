import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId, WithId } from 'mongodb';
import { RealEstateListingService } from '../../core/applications/real-estate';
import { RealEstateListing } from '../../core/domains';
import RealEstateListingRequestDto from './real-estate-listing-request.dto';
import { RealEstateListingController } from './real-estate-listing.controller';

const mockListing1 = {
  propertyType: 'Single Family',
  provinceName: 'Alberta',
  buildingType: 'House',
  priceUnformattedValue: 500000,
};

const mockListing2 = {
  propertyType: 'Single Family',
  provinceName: 'Ontario',
  buildingType: 'Apartment',
  priceUnformattedValue: 200000,
};

const mockListings: WithId<RealEstateListing>[] = [
  {
    _id: new ObjectId('507f1f77bcf86cd799439011'),
    ...new RealEstateListing(mockListing1),
  },
  {
    _id: new ObjectId('507f191e810c19729de860ea'),
    ...new RealEstateListing(mockListing2),
  },
];

const mockListingService = {
  findAllAsync: jest.fn().mockResolvedValue(mockListings),
};

describe('RealEstateListingController', () => {
  let controller: RealEstateListingController;
  let service: RealEstateListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealEstateListingController],
      providers: [
        { provide: RealEstateListingService, useValue: mockListingService },
      ],
    }).compile();

    controller = module.get<RealEstateListingController>(
      RealEstateListingController,
    );
    service = module.get<RealEstateListingService>(RealEstateListingService);
  });

  it('should exclude _id from the response', async () => {
    jest.spyOn(service, 'findAllAsync').mockResolvedValue(mockListings);

    // Invoke the controller method
    const result = await controller.findAllAsync(
      new RealEstateListingRequestDto({ propertyType: 'Single Family' }),
    );

    // Assert `_id` is excluded
    expect(result[0]).not.toHaveProperty('_id');
  });
});
