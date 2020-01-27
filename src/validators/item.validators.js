const Joi = require('@hapi/joi');

export const itemParamsSchema = Joi.object({
    ID: Joi.string().guid().required()
});
