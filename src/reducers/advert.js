import {ADVERT_FETCHED} from "../actions/adverts";

const reducer =(state=[],action={})=>{
switch (action.type) {
    
    case ADVERT_FETCHED:
    return action.advert;

    default :
    return state
}
}

export default reducer;