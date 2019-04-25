import request from 'superagent';
export const ADVERTS_FETCHED='ADVERTS_FETCHED';
export const ADVERT_FETCHED='ADVERT_FETCHED';
export const ADVERT_CREATE_SUCCESS='ADVERT_CREATE_SUCCESS';

const baseUrl = 'http://localhost:4000'

const advertsFetched = adverts => ({
    type : ADVERTS_FETCHED,
    adverts
  })

const advertFetched = advert => ({
    type : ADVERT_FETCHED,
    advert
})

const advertCreateSuccess = advert => ({
    type: ADVERT_CREATE_SUCCESS,
    advert
  })
  
  export const createAdvert = (data) => dispatch => {
    request
      .post(`${baseUrl}/adverts`)
      .send(data)
      .then(response => {
        dispatch(advertCreateSuccess(response.body))
      })
      .catch(console.error)
  }

  export const loadAdverts = () => (dispatch, getState) => {
    // when the state already contains advertss, we don't fetch them again
    if (getState().adverts) 
    
    // a GET /adverts request
    request(`${baseUrl}/adverts`)
      .then(response => {
        // dispatch an Adverts_FETCHED action that contains the events
        dispatch(advertsFetched(response.body.adverts))
      })
      .catch(console.error)
  }
  
  export const loadAdvert = (id) => (dispatch) => {
       request(`${baseUrl}/adverts/${id}`)
         .then(response => {
             console.log(response)
           dispatch(advertFetched(response.body))
         })
         .catch(console.error)
    }
