const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const title = check('title')
  .notEmpty()
  .withMessage('Title must not be empty.');


const validateCreate = [
  title,
  handleValidationErrors,
];

exports.validateCreate = validateCreate;
