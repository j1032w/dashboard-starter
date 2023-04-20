import {
  DasGridCellTemplateEnum,
  DasGridColumnInterface,
  DasGridColumnTypeEnum
} from '../../../common/components/das-grid/services/das-grid-column-interface';

export const GRID_VIEW_SPINNER_ID = 'grid-view-spinner';

export const GRID_VIEW_COLUMNS: DasGridColumnInterface[] = [
  {
    dataField:'buildingBathroomTotal',
    caption:'Bathrooms Total',
    dataType:DasGridColumnTypeEnum.Number,
  },

  {
    dataField:'buildingBedroom',
    caption:'Bedrooms',
    dataType:DasGridColumnTypeEnum.Number,
  },

  {
    dataField: 'buildingStoriesTotal',
    caption: 'Stories',
    dataType:DasGridColumnTypeEnum.Number
  },

  {
    dataField: 'buildingType',
    caption: 'Building Type',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'landSizeTotal',
    caption: 'Land Size',
    dataType:DasGridColumnTypeEnum.Number
  },

  {
    dataField: 'priceUnformattedValue',
    caption: 'Price',
    dataType:DasGridColumnTypeEnum.Number,
    cellTemplate: DasGridCellTemplateEnum.Currency
  },

  {
    dataField: 'propertyOwnershipType',
    caption: 'Ownership Type',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'propertyType',
    caption: 'Property Type',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'buildingAmenity',
    caption: 'Building Amenities',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'buildingSizeInterior',
    caption: 'Building Size',
    dataType:DasGridColumnTypeEnum.Number
  },

  {
    dataField: 'landLandscapeFeature',
    caption: 'Land Landscape Features',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'listingBoundary',
    caption: 'Listing Boundary',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'PostalCode',
    caption: 'Postal Code',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'propertyAmenityNearBy',
    caption: 'Property Amenities Near By',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'propertyParkingSpaceTotal',
    caption: 'Parking Space Total',
    dataType:DasGridColumnTypeEnum.Number
  },

  {
    dataField: 'propertyParkingType',
    caption: 'Parking Type',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField: 'provinceName',
    caption: 'Province Name',
    dataType:DasGridColumnTypeEnum.String
  },

  {
    dataField:'city',
    caption:'City',
    dataType:DasGridColumnTypeEnum.String,
  },

  {
    dataField:'listedTime',
    caption:'Listed Time',
    dataType:DasGridColumnTypeEnum.Date,
  }


];
