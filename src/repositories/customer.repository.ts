import {DefaultCrudRepository} from '@loopback/repository';
import {Customer, CustomerRelations} from '../models';
import {PostgresDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id,
  CustomerRelations
> {
  constructor(
    @inject('datasources.Postgres_Db') dataSource: PostgresDbDataSource,
  ) {
    super(Customer, dataSource);
  }
}
