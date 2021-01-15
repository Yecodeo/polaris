import hitsTransformer from './hitsTransformer';

export default {
  fail: (error) => (
    {
      state: 'error',
      error,
    }
  ),
  getHandler: {
    succes: (response) => (
      {
        state: 'ok',
        data: hitsTransformer(response),
      }
    ),
  },
  postHandler: {
    succes: (response) => (
      {
        state: 'ok',
        data: {
          id: response.body._id,
          result: response.body.result,
        },
      }
    ),
  },
  putHandler: {
    success: (response) => (
      {
        state: 'ok',
        data: {
          id: response.body._id,
          result: response.body.result,
        },
      }
    ),
  },
};
