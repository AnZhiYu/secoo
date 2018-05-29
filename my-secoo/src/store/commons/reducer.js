

import state from './state'

const reducer = (proviousState =state,action) =>{
    let new_state = { ...proviousState }



    switch ( action.type ){
        default:break;
    }

    return new_state

}

export default reducer