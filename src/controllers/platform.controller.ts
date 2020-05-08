import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Platform} from '../models';
import {PlatformRepository} from '../repositories';

export class PlatformController {
  constructor(
    @repository(PlatformRepository)
    public platformRepository : PlatformRepository,
  ) {}

  @post('/platforms', {
    responses: {
      '200': {
        description: 'Platform model instance',
        content: {'application/json': {schema: getModelSchemaRef(Platform)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Platform, {
            title: 'NewPlatform',
            exclude: ['id'],
          }),
        },
      },
    })
    platform: Omit<Platform, 'id'>,
  ): Promise<Platform> {
    return this.platformRepository.create(platform);
  }

  @get('/platforms/count', {
    responses: {
      '200': {
        description: 'Platform model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Platform) where?: Where<Platform>,
  ): Promise<Count> {
    return this.platformRepository.count(where);
  }

  @get('/platforms', {
    responses: {
      '200': {
        description: 'Array of Platform model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Platform, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Platform) filter?: Filter<Platform>,
  ): Promise<Platform[]> {
    return this.platformRepository.find(filter);
  }

  @patch('/platforms', {
    responses: {
      '200': {
        description: 'Platform PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Platform, {partial: true}),
        },
      },
    })
    platform: Platform,
    @param.where(Platform) where?: Where<Platform>,
  ): Promise<Count> {
    return this.platformRepository.updateAll(platform, where);
  }

  @get('/platforms/{id}', {
    responses: {
      '200': {
        description: 'Platform model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Platform, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Platform, {exclude: 'where'}) filter?: FilterExcludingWhere<Platform>
  ): Promise<Platform> {
    return this.platformRepository.findById(id, filter);
  }

  @patch('/platforms/{id}', {
    responses: {
      '204': {
        description: 'Platform PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Platform, {partial: true}),
        },
      },
    })
    platform: Platform,
  ): Promise<void> {
    await this.platformRepository.updateById(id, platform);
  }

  @put('/platforms/{id}', {
    responses: {
      '204': {
        description: 'Platform PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() platform: Platform,
  ): Promise<void> {
    await this.platformRepository.replaceById(id, platform);
  }

  @del('/platforms/{id}', {
    responses: {
      '204': {
        description: 'Platform DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.platformRepository.deleteById(id);
  }
}
