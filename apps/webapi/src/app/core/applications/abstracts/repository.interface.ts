import {
  Collection,
  DeleteResult,
  Filter,
  FindOptions,
  InsertManyResult,
  InsertOneResult,
  ModifyResult,
  ObjectId,
  OptionalUnlessRequiredId,
  WithId,
} from 'mongodb';

export interface RepositoryInterface<T> {
  findAllAsync(filter: Filter<T>, findOptions?: FindOptions): Promise<WithId<T>[]>;
  findByIdAsync(_id: ObjectId): Promise<T>;
  insertOneAsync(item: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>>;
  insertManyAsync(items: OptionalUnlessRequiredId<T>[]): Promise<InsertManyResult<T>>;
  findOneAndUpdateAsync(filter: Filter<T>, item: T): Promise<ModifyResult<T>>;
  findOneAndDeleteAsync(filter: Filter<T>): Promise<ModifyResult<T>>;
  deleteOneAsync(_id: ObjectId): Promise<DeleteResult>;
  deleteManyAsync(filter: Filter<T>): Promise<DeleteResult>;
  aggregateAsync(pipeline: Document[]): Promise<T[]>;


}
