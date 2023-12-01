export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_ODONTOLOGOS':
            return {...state, data: action.payload}
        case 'ADD_FAV': 
            return {...state, favArray:[...state.favArray, action.payload]}
        case 'CHANGE_THEME':
            return {
                ...state, darkTheme: state.darkTheme === false ? true : false};
        case 'GET_ODONTOLOGO':
            return {...state, data:action.payload}
        case 'DELETE_FAV': 
            return {...state, favArray: state.favArray.filter(obj => obj.id !== action.payload)};
        default:
            return state
    }
}