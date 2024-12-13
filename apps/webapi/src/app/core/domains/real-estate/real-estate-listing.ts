import {ObjectId} from "mongodb";

export class RealEstateListing {
  _id?: ObjectId;
  persistenceId?: string;
  id?: string;
  buildingAmenity?: string;
  buildingBathroomTotal?: number;
  buildingBedroom?: number;
  buildingSizeInterior?: number;
  buildingStoriesTotal?: number;
  buildingType?: string;
  distance?: string;
  landLandscapeFeature?: string;
  landSizeTotal?: string;
  listingBoundary?: string;
  mlsNumber?: string;
  postalCode: string;
  priceUnformattedValue?: number;
  propertyAmenityNearBy?: string;
  propertyOwnershipType?: string;
  propertyParkingSpaceTotal?: number;
  propertyParkingType?: string;
  propertyType?: string;
  provinceName?: string;
  remark?: string;
  city?: string;
  listedTime?: Date;
  modifiedTime?: Date;

  constructor(data?: Partial<RealEstateListing>) {
    if (!data) return;

    // domain entity constructor is receiving data that has already been strictly validated and
    // normalized by the request DTO
    // using Object.assign(this, data) should be safe
    Object.assign(this, data);

    this.listedTime = data?.listedTime ? new Date(this.listedTime) : null;
    this.modifiedTime = data?.modifiedTime ? new Date(this.modifiedTime) : null;
  }
}
