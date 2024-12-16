export class MongoComparisonOperators<T> {
  $eq?: T;
  $gt?: T;
  $gte?: T;
  $lt?: T;
  $lte?: T;
  $in?: T[];
}


type MongoFieldQuery<T> = T | MongoComparisonOperators<T>;




// Represents a full MongoDB query object
export default class MongoQuery  {
  $and?: MongoQuery[];
  $or?: MongoQuery[];
  [field: string]: MongoFieldQuery<unknown> | MongoQuery[] | undefined;
}
