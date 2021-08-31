import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  STAGE: Joi.string().valid('dev', 'prod').default('dev'),
  MONGODB_URI: Joi.string().required(),
});
