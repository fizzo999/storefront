import superagent from 'superagent';

let api = 'https://api-js401.herokuapp.com/api/v1/products';

//==============( async function ) creator functions =================

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.body);
      console.log('HERE IS THE status FROM superagent ======>>>>>>>', response.status);
      dispatch(getAction(response.body));
    });
};

export const saveRemoteData = (data) => async dispatch => {
  let refinedData = JSON.parse(data);
  let response = await superagent.post(api).send(refinedData);
  console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.body);
  console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.status);
  let raw = response.body;
  let refined = JSON.parse(raw);
  dispatch(postAction(refined));

};

export const updateRemoteData = (id, data) => async dispatch => {
  let response = await superagent.put(`${api}/${id}`).send(data);
  console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.body);
  console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.status);
  dispatch(putAction(response));//NOTE TODO I d rather send the whole response so I have access to the status
};// NOTO I still need to code the putAction


export const deleteRemoteData = (id) => async dispatch => {
  let response = await superagent.delete(`${api}/${id}`);
  console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.body);
  console.log('HERE IS THE data FROM superagent ======>>>>>>>', response.status);
  dispatch(deleteAction(response));//NOTE TODO I d rather send the whole response so I have access to the status
};// NOTO I still need to code the putAction

//==============( actions = objects ) regular creator functions =================

export const getAction = data => {
  return {
    type: 'GET_ONLINE_PRODUCTS',
    payload: data,
  };
};

export const postAction = (data) => {
  return {
    type: 'POST_ONLINE_PRODUCTS',
    payload: data,
  };
};


export const putAction = (id, data) => { // note that I did this differnetly in toDo APP - I re built the entire object and sent the entire updated object - so the id would be implicit - like ._id
  return {
    type: 'PUT_ONLINE_PRODUCTS',
    payload: { id, data }
  };
};

export const deleteAction = id => {
  return {
    type: 'DELETE_ONLINE_PRODUCTS',
    payload: id,
  };
};

