import {Entity, model, property} from '@loopback/repository';

@model()
export class Platform extends Entity {
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

  constructor(data?: Partial<Platform>) {
    super(data);
  }
}

export interface PlatformRelations {
  // describe navigational properties here
}

export type PlatformWithRelations = Platform & PlatformRelations;
