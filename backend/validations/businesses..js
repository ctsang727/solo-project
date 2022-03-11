const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const title = check('title')
  .matches(/^\S+/)
  .withMessage('Title must not be empty or start with empty space.');

const description = check('description')
  .notEmpty()
  .isString()
  .withMessage('cannot be empty')

const address = check('address')
  .notEmpty()
  .withMessage('Address cannot be empty')

const city = check ('city')
  .notEmpty()
  .withMessage('City cannot be empty')


  
  

const validateCreate = [
  title,
  description,
  address,
  city,
  handleValidationErrors,
];

const validateUpdate = [
  title,
  description,
  address,
  city,
  handleValidationErrors,
];


exports.validateCreate = validateCreate;
exports.validateUpdate = validateUpdate;
