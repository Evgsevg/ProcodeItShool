const express = require('express');
const Ajv = require('ajv');
const router = express.Router();

const ajv = new Ajv();


/* GET home page. */
router.get('/', function(req, res, next) {
  const schema = {
    type: 'object',
    properties: {
      login: { type: 'string' },
      pwd: { type: 'string' },
    },
    additionalProperties: false,
  }

  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  
  if (!valid) {
    res.json({
      status: 'invlid_data',
      payload: {
        error: validate.errors
      }
    });

    return;
  }



  
  
  
  
  
  
  res.render('index', { title: 'Express' });
});


router.get('/product/list', (req, res) => {
  const schema = {
    type: 'object',
    properties: {},
    additionalProperties: false,
  }

  const validate = ajv.compile(schema);
  const valid = validate(req.body);
  
  if (!valid) {
    res.json({
      status: 'invlid_data',
      payload: {
        error: validate.errors
      }
    });

    return;
  }

  const items = [
    {id: 'ag3', name: 'Троянды', price: 500 },
    {id: 'd23', name: 'Гладиолусы', price: 600 },
    {id: 'fc5', name: 'Пестики', price: 700 },
    {id: 'h17', name: 'Мак', price: 120 }
  ];

  res.json(items);

});

module.exports = router;




