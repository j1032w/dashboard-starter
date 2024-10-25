import { ColDef } from 'ag-grid-community';
import { AgGridCellDataTypeEnum } from '../../../common/components/das-grid/services/das-grid-column-interface';

export const GRID_VIEW_SPINNER_ID = 'grid-view-spinner';

export const GRID_VIEW_COLUMNS: ColDef[] = [
  {
    field: 'provinceName',

    headerName: 'Province Name',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'city',
    headerName: 'City',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'buildingBathroomTotal',
    headerName: 'Bathrooms Total',
    cellDataType: AgGridCellDataTypeEnum.Number,
    hide: false
  },

  {
    field: 'buildingBedroom',
    headerName: 'Bedrooms',
    cellDataType: AgGridCellDataTypeEnum.Number,
    hide: true
  },

  {
    field: 'buildingStoriesTotal',
    headerName: 'Stories',
    cellDataType: AgGridCellDataTypeEnum.Number,
    hide: false
  },

  {
    field: 'buildingType',
    headerName: 'Building Type',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'landSizeTotal',
    headerName: 'Land Size (sqft)',
    cellDataType: AgGridCellDataTypeEnum.Number,
    hide: true
  },

  {
    field: 'priceUnformattedValue',
    headerName: 'Price',
    cellDataType: AgGridCellDataTypeEnum.Number,
    //cellTemplate: DasGridCellTemplateEnum.Currency,
    hide: false
  },

  {
    field: 'propertyOwnershipType',
    headerName: 'Ownership Type',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'propertyType',
    headerName: 'Property Type',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'buildingAmenity',
    headerName: 'Building Amenities',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: true
  },

  {
    field: 'buildingSizeInterior',
    headerName: 'Building Size',
    cellDataType: AgGridCellDataTypeEnum.Number,
    hide: true
  },

  {
    field: 'landLandscapeFeature',
    headerName: 'Land Landscape Features',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: true
  },

  {
    field: 'listingBoundary',
    headerName: 'Listing Boundary',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: true
  },

  {
    field: 'postalCode',
    headerName: 'Postal Code',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'propertyAmenityNearBy',
    headerName: 'Property Amenities Near By',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'propertyParkingSpaceTotal',
    headerName: 'Parking Space Total',
    cellDataType: AgGridCellDataTypeEnum.Number,
    hide: false
  },

  {
    field: 'propertyParkingType',
    headerName: 'Parking Type',
    cellDataType: AgGridCellDataTypeEnum.Text,
    hide: false
  },

  {
    field: 'listedTime',
    headerName: 'Listed Date',
    cellDataType: AgGridCellDataTypeEnum.Date,
    hide: false
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
