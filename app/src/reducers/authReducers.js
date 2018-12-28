const authReducer = (state='',action) =>{
    switch(action.type){
        case 'SET_JWT_TOKEN':
            localStorage.setItem('TOKEN', action.payload.data.token);
            return action.payload.data.token;
        default:
            return state;
    }
} 

export default authReducer;
