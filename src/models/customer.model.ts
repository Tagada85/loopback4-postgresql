import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fkCustomerPlatformId: {
        name: 'fk_customer_platformId',
        entity: 'Platform',
        entityKey: 'id',
        foreignKey: 'platformid',
      },
    },
  },
})
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    useDefaultIdType: false,
    postgresql: {
      dataType: 'uuid',
    },
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      dataType: 'uuid',
    },
  })
  platformId: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
