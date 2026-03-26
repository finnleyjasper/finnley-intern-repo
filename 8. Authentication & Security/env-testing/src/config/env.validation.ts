import * as Joi from "joi";

export const envValidationSchema = Joi.object({
  PORT: Joi.number().port().required(),
  APP_NAME: Joi.string().trim().min(1).required(),
  API_KEY: Joi.string().trim().min(12).required(),
});
