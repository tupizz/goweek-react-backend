const { check } = require('express-validator/check');

module.exports = {

    validations: [

        check('author', 'must not be empty')
            .not().isEmpty(),

        check('author')
            .exists().withMessage('required field')
            .trim()
            .escape(),

        check('content', 'must not be empty')
            .not().isEmpty(),
            
        check('content')
            .exists().withMessage('required field')
            .isLength({ max: 225 }).withMessage('too many characters')
    ]
}
