import {
  DasGridCellTemplateEnum,
  DasGridColumnInterface,
  DasGridColumnTypeEnum
} from '../../../common/components/das-grid/services/das-grid-column-interface';

export const GRID_VIEW_SPINNER_ID = 'grid-view-spinner';

export const GRID_VIEW_COLUMNS: DasGridColumnInterface[] = [
  {
    dataField: 'provinceName',
    caption: 'Province Name',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'city',
    caption: 'City',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'buildingBathroomTotal',
    caption: 'Bathrooms Total',
    dataType: DasGridColumnTypeEnum.Number,
    visible: true
  },

  {
    dataField: 'buildingBedroom',
    caption: 'Bedrooms',
    dataType: DasGridColumnTypeEnum.Number,
    visible: false
  },

  {
    dataField: 'buildingStoriesTotal',
    caption: 'Stories',
    dataType: DasGridColumnTypeEnum.Number,
    visible: true
  },

  {
    dataField: 'buildingType',
    caption: 'Building Type',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'landSizeTotal',
    caption: 'Land Size (sqft)',
    dataType: DasGridColumnTypeEnum.Number,
    visible: false
  },

  {
    dataField: 'priceUnformattedValue',
    caption: 'Price',
    dataType: DasGridColumnTypeEnum.Number,
    cellTemplate: DasGridCellTemplateEnum.Currency,
    visible: true
  },

  {
    dataField: 'propertyOwnershipType',
    caption: 'Ownership Type',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'propertyType',
    caption: 'Property Type',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'buildingAmenity',
    caption: 'Building Amenities',
    dataType: DasGridColumnTypeEnum.String,
    visible: false
  },

  {
    dataField: 'buildingSizeInterior',
    caption: 'Building Size',
    dataType: DasGridColumnTypeEnum.Number,
    visible: false
  },

  {
    dataField: 'landLandscapeFeature',
    caption: 'Land Landscape Features',
    dataType: DasGridColumnTypeEnum.String,
    visible: false
  },

  {
    dataField: 'listingBoundary',
    caption: 'Listing Boundary',
    dataType: DasGridColumnTypeEnum.String,
    visible: false
  },

  {
    dataField: 'postalCode',
    caption: 'Postal Code',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'propertyAmenityNearBy',
    caption: 'Property Amenities Near By',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'propertyParkingSpaceTotal',
    caption: 'Parking Space Total',
    dataType: DasGridColumnTypeEnum.Number,
    visible: true
  },

  {
    dataField: 'propertyParkingType',
    caption: 'Parking Type',
    dataType: DasGridColumnTypeEnum.String,
    visible: true
  },

  {
    dataField: 'listedTime',
    caption: 'Listed Date',
    dataType: DasGridColumnTypeEnum.Date,
    visible: true
  }
];

export const DEMO_MONGO_FILTER = {
  filter: {
    $or: [
      {
        $and: [
          {
            city: {
              $eq: 'Calgary'
            }
          },
          {
            buildingBedroom: {
              $gt: 2
            }
          },
          {
            listedTime: {
              $gt: '2023-04-01'
            }
          },
          {
            priceUnformattedValue: {
              $gt: 200000
            }
          },
          {
            priceUnformattedValue: {
              $lte: 800000
            }
          }
        ]
      },
      {
        $and: [
          {
            city: {
              $in: ['Toronto', 'Vancouver', 'Montreal']
            }
          },
          {
            buildingBedroom: {
              $gt: 2
            }
          },
          {
            buildingBathroomTotal: {
              $gt: 2
            }
          }
        ]
      }
    ]
  }
};
