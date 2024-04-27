const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: ["com"] } }),
  phoneNumber: Joi.number().required(),
  password: Joi.string().required(),
  roles: Joi.array().items(Joi.string().valid("user", "admin")),
  gender: Joi.string().required(),
});

const userValidation = (req, res, next) => {
  console.log(req.body);
  const { error } = Schema.validate(req.body);
  console.log(error);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

module.exports = { userValidation };
