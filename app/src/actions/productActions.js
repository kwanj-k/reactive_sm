export const addProduct = (product) {
  return (dispatch,getState) =>{
      //call django
      dispatch({
          type:'ADD_PRODUCT',
          product
      })
  }
}
