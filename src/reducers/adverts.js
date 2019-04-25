import { ADVERTS_FETCHED,ADVERT_CREATE_SUCCESS } from "../actions/adverts";


const reducers= (state = [], action = {}) => {
    switch (action.type) {
      case ADVERTS_FETCHED:
      return action.adverts ;

      case ADVERT_CREATE_SUCCESS:
      return  [...state,
                action.advert];

    default:
      return  state
    }
  }

  export default reducers;