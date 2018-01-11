import {SET_MESSAGE} from '../Types/message';

const initState = {  // create our initial state
  message : ""
}

export default (state = initState, action) => {
    switch(action.type){ // depending on the action
      case SET_MESSAGE :
        return {...state,message : action.payload.message} // apply the message with whatever is in the action prop
        default :
          return state // otherwise leave the state alone
    }
}
