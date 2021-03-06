// const HelloWorld = ({name}) => {
//   return(<p> Pacarku adalah {name}</p>)
// }

import ActionType from './globalActionType';

// const createStore = redux.createStore();


const globalState = {
    totalOrder: 0,
    
  }
  
  // rEDUCER -> pengupdate store
  const rootReducer = (state= globalState, action) => {
    
    if(action.type === ActionType.PLUS_ORDER) {
      return {
        ...state,
        totalOrder: state.totalOrder +1
      }
    }
    if(action.type === ActionType.MINUS_ORDER) {
      let totalOrder = 0;
      if(state.totalOrder > 0){
        totalOrder = state.totalOrder - 1;
      }
  
      return {      
        ...state,
        totalOrder: totalOrder,
      }
    }
    return state;
  }

export default rootReducer;