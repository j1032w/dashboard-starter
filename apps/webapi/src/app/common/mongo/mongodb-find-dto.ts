import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional } from 'class-validator';
import { Filter, FindOptions } from 'mongodb';

export default class MongodbFindDto<T> {
  @ApiProperty({
    description: 'Filter criteria',
    type: Object,
    required: false,
    example: { fieldName: { $eq: 'value' } },
  })
  @IsOptional()
  @IsObject()
  filter: Filter<T>;



  @ApiProperty({
    description: 'Query options',
    type: Object,
    required: false,
    example: { skip: 0, limit: 10, sort: { fieldName: 1 }, projection: { fieldName: 1 } },
  })
  @IsOptional()
  @IsObject()
  options?: FindOptions<T>;
}
