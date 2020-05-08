import {DefaultCrudRepository} from '@loopback/repository';
import {Platform, PlatformRelations} from '../models';
import {PostgresDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlatformRepository extends DefaultCrudRepository<
  Platform,
  typeof Platform.prototype.id,
  PlatformRelations
> {
  constructor(
    @inject('datasources.Postgres_Db') dataSource: PostgresDbDataSource,
  ) {
    super(Platform, dataSource);
  }
}
