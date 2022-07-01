import { types } from '../types/types';


// como se veria el stado

// const initialState = { 
//     logged: true | false,
//     name: 'xxxxx'
//  }

export const authReducer = ( state = {}, action ) => {
    console.log(action);

    switch ( action.type ) {
// por buena practica se retorna el state para no pederdir informacon
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

//aca no se retorna el state y se borra el user
        case types.logout:
            return {
                logged: false,
            };
    
        default:
            return state;
    }

}

// Este reducer controla el login y logout de la aplicacion