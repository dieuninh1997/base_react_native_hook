export const GET_ALL_PRODUCT = 'GET_ALL_PRODUCT'
export const GET_ALL_PRODUCT_SUCCESS = 'GET_ALL_PRODUCT_SUCCESS'

export const getProduct = (data, callback) => ({
  type: GET_ALL_PRODUCT,
  payload: { data, callback },
})

const initState = {
  haha: 'haha',
}

export default (state = initState, action) => {
  switch (action.type) {
  case 'dddd':
    return state

  default:
    return state
  }
}
