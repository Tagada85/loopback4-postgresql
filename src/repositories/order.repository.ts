import {DefaultCrudRepository} from '@loopback/repository';
import {Order, OrderRelations} from '../models';
import {PostgresDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {
  constructor(
    @inject('datasources.Postgres_Db') dataSource: PostgresDbDataSource,
  ) {
    super(Order, dataSource);
  }
}
