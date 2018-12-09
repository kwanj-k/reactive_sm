const initState = {
    productlist:[
        {name:'Monster',price:200,"inventory":20,category:'drink',id:1},
        {name:'Monster1',price:200,"inventory":20,category:'drink',id:2},
        {name:'Monster2',price:200,"inventory":20,category:'drink',id:3}
    ]
}
const rootReducer = (state = initState,action) =>{
    return state
}

export default rootReducer;