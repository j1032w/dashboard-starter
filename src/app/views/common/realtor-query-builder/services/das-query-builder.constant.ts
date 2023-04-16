import { QueryBuilderConfig } from 'angular2-query-builder';

// query builder requires lowercase type name
export enum FieldTypeEnum{
  date = 'date',
  string = 'string',
  number = 'number',
  category = 'category',
  boolean = 'boolean'
}




export const REALTOR_QUERY_CONFIG: QueryBuilderConfig = {
  fields: {
    buildingBedroom: { name: 'Beds', type: FieldTypeEnum.number },

    buildingType: { name: 'Building Type',
      type: FieldTypeEnum.category,
      options: [
        { name: 'Apartment', value: 'Apartment' },
        { name: 'Commercial Apartment', value: 'Commercial Apartment' },
        { name: 'Duplex', value: 'Duplex' },
        { name: 'Fourplex', value: 'Fourplex' },
        { name: 'Garden Home', value: 'Garden Home' },
        { name: 'House', value: 'House' },
        { name: 'Manufactured Home/Mobile', value: 'Manufactured Home/Mobile' },
        { name: 'Mobile Home', value: 'Mobile Home' },
        { name: 'Other', value: 'Other' },
        { name: 'Residential Commercial Mix', value: 'Residential Commercial Mix' },
        { name: 'Row/ Townhouse', value: 'Row/ Townhouse' },
        { name: 'Special Purpose', value: 'Special Purpose' },
        { name: 'Triplex', value: 'Triplex' },
      ]
    },

    buildingBathroomTotal: { name: 'Baths', type: FieldTypeEnum.number },

    buildingStoriesTotal: { name: 'Stores', type: FieldTypeEnum.number },

    city: { name: 'City',
      type: FieldTypeEnum.category,
      options: [
        { name: 'Alberta', value: 'Alberta' },
        { name: 'Montreal', value: 'Montreal' },
        { name: 'Toronto', value: 'Toronto' },
        { name: 'Vancouver', value: 'Vancouver' }
      ]},

    listedTime: { name: 'Listed Time', type: FieldTypeEnum.date },

    buildingSizeInterior: { name: 'Land Size (sqft)', type: FieldTypeEnum.number },



    priceUnformattedValue: { name: 'Price', type: FieldTypeEnum.number },


    propertyOwnershipType: { name: 'Ownership/ Title',
      type: FieldTypeEnum.category,
      options: [
        { name: 'Freehold', value: 'Freehold' },
        { name: 'Condominium/ Strata', value: 'Condominium/Strata' },
        { name: 'Timeshare/ Fractional', value: 'Timeshare/Fractional' },
        { name: 'Leasehold', value: 'Leasehold' }
      ]},

    propertyType: { name: 'Property Type',
      type: FieldTypeEnum.category,
      options: [
        { name: 'Multi-family,', value: 'Multi-family,' },
        { name: 'Parking', value: 'Parking' },
        { name: 'Single Family', value: 'Single Family' },
        { name: 'Vacant Land', value: 'Vacant Land' }
      ]},





    gender: {
      name: 'Gender',
      type: 'category',
      options: [
        { name: 'Male', value: 'm' },
        { name: 'Female', value: 'f' }
      ]
    },
    name: { name: 'Name', type: 'string' },
    notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='] },
    educated: { name: 'College Degree?', type: 'boolean' },
    birthday: {
      name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
      defaultValue: (() => new Date())
    },
    school: { name: 'School', type: 'string', nullable: true },
    occupation: {
      name: 'Occupation',
      type: 'category',
      options: [
        { name: 'Student', value: 'student' },
        { name: 'Teacher', value: 'teacher' },
        { name: 'Unemployed', value: 'unemployed' },
        { name: 'Scientist', value: 'scientist' }
      ]
    }
  }
};


export const REALTOR_DEMO_QUERY = {
  "condition": "or",
  "rules": [
    {
      "condition": "and",
      "rules": [
        {
          "field": "city",
          "operator": "=",
          "value": "Alberta"
        },
        {
          "field": "buildingBedroom",
          "operator": ">",
          "value": 3
        },
        {
          "field": "listedTime",
          "operator": ">",
          "value": "2023-04-01"
        },
        {
          "field": "buildingSizeInterior",
          "operator": ">=",
          "value": 500
        },
        {
          "field": "buildingSizeInterior",
          "operator": "<=",
          "value": 1500
        }
      ]
    },
    {
      "condition": "and",
      "rules": [
        {
          "field": "city",
          "operator": "in",
          "value": [
            "Toronto",
            "Vancouver"
          ]
        },
        {
          "field": "buildingBedroom",
          "operator": ">",
          "value": 2
        },
        {
          "field": "buildingBathroomTotal",
          "operator": ">",
          "value": 2
        }
      ]
    }
  ]
};
