import {
  Collection,
  Db,
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
import { RepositoryInterface } from '../../../core/applications/abstracts';

export class MongoRepositoryGeneric<T extends { _id?: ObjectId }> implements RepositoryInterface<T> {
  private readonly collection: Collection<T>;

  constructor(db: Db, collectionName: string) {
    this.collection = db.collection<T>(collectionName);
  }

  async findAllAsync(filter: Filter<T>, findOptions?: FindOptions): Promise<WithId<T>[]> {
    return this.collection.find(filter, findOptions).toArray();
  }

  async findByIdAsync(_id: ObjectId): Promise<T> {
    return this.collection.findOne<T>({ _id } as Filter<T>);
  }

  async insertOneAsync(item: OptionalUnlessRequiredId<T>): Promise<InsertOneResult<T>> {
    return await this.collection.insertOne(item);
  }

  async insertManyAsync(items: OptionalUnlessRequiredId<T>[]): Promise<InsertManyResult<T>> {
    return await this.collection.insertMany(items);
  }

  async findOneAndUpdateAsync(item: T): Promise<ModifyResult<T>> {
    return this.collection.findOneAndUpdate({_id: item._id} as Filter<T>, item, {
      upsert: false,
    });
  }


  async findOneAndDeleteAsync(filter: Filter<T>): Promise<ModifyResult<T>> {
    return this.collection.findOneAndDelete(filter);
  }

  async deleteOneAsync(_id: ObjectId): Promise<DeleteResult> {
    return this.collection.deleteOne({ _id } as Filter<T>);
  }

  async deleteManyAsync(filter: Filter<T>): Promise<DeleteResult> {
    return this.collection.deleteMany(filter);
  }

  async aggregateAsync<Document>(pipeline: Document[]): Promise<T[]> {
    return this.collection.aggregate<T>(pipeline).toArray();
  }
}
