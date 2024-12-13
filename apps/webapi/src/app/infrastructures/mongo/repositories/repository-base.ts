import { Collection, Db, ObjectId } from 'mongodb';

export class RepositoryBase<T extends { persistenceId?: string; _id?: ObjectId }> {
  protected readonly collection: Collection<T>;

  constructor(
    protected db: Db,
    collectionName: string,
  ) {
    this.collection = db.collection<T>(collectionName);
  }


  protected stringIdToObjectId(id: string): ObjectId {
    return new ObjectId(id);
  }

  protected updatePersistenceId(listing: T): T {
    listing.persistenceId = listing._id.toString();
    return listing;
  }

  protected updatePersistenceIds(listings: T[]): T[] {
    return listings.map(item => this.updatePersistenceId(item));
  }
}
