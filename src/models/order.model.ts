import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fkOrderPlatformId: {
        name: 'fk_order_platformId',
        entity: 'Platform',
        entityKey: 'id',
        foreignKey: 'platformid',
      },
      fkOrderCustomerId: {
        name: 'fk_order_customerId',
        entity: 'Customer',
        entityKey: 'id',
        foreignKey: 'customerid',
      },
    },
  },
})
export class Order extends Entity {
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
    postgresql: {
      dataType: 'uuid',
    },
  })
  customerId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      dataType: 'uuid',
    },
  })
  platformId: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
