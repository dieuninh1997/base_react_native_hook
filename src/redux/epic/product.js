import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import axios from 'axios'
import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_SUCCESS } from '../reducers/product'

const getProduct = (action$) => action$.pipe(
  ofType(GET_ALL_PRODUCT),
  mergeMap(async (action) => {
    const { callback, data } = action.payload
    const bodyData = { ...data }
    try {
      const response = await axios('https://listing-stg.services.teko.vn/api/search/?channel=pv_online&visitorId=&q=&terminal=CP01')
      return {
        data: response.data,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }),
  map((res) => ({
    type: GET_ALL_PRODUCT_SUCCESS,
    payload: { data: res.data },
  })),
)

export {
  getProduct,
}
