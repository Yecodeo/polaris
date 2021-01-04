import express from 'express';
import elasticsearch from 'elasticsearch';

const client = elasticsearch.Client({
  host: `http://${process.env.DB}:9200`
});
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ name: 'ok'})
})
router.use((req, res, next) => {
  client.index({
    index: 'logs',
    body: {
      url: req.url,
      method: req.method
    }
  }).then(res => {
    console.log('Logs indexed')
  }).catch(err => {
    console.error(err);
  })
  next();
})


/* GET home page. */
router.get('/publication/user/:id', function (req, res, next) {
  client.search({
    index: 'publication',
    body: {
      query: {
        match_all: {}
      }
    }
  }).then( response => {
    res.status(200).json({
      state: {
        data: response,
        message: 'indexeds'
      }
    });
  }).catch( error => {
    return res.statusCode(500).json({
      state: {
        error,
      }
    })
  });
});

/**
 * Add new publication
 */
router.post('/publication', function (req, res) {
  client.index({
    index: 'publication',
    body: req.body
  }).then( response => {
    return res.status(200).json({
      state: {
        data: response,
        message: 'indexeds'
      }
    });
  }).catch( error => {
    return res.statusCode(500).json({
      state: {
        error,
      }
    })
  });
});

/**
 * update a publication
 */
router.put('/publication/:id', function (req, res) {
  client.update({
    index: 'publication',
    id: req.params.id
  }).then( response => {
    res.status(200).json({
      state: {
        message: 'updated'
      }
    });
  }).catch( error => {
    return res.statusCode(500).json({
      state: 'ok', 
      error
    })
  });
});

/**
 * delete a publication
 */
router.delete('/publication/:id', function (req, res) {
  client.delete({
    index: 'publication',
    id: req.params.id
  }).then( response => {
    res.status(200).json({
      state: {
        state: 'ok',
        message: 'deleted'
      }
    });
  }).catch( error => {
    return res.statusCode(500).json({
      state: 'ok', 
      error
    })
  });
});

export default router;