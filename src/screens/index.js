import ProductScreen from './product'
import ProductDetailScreen from './productdetail'
import HOC from './HOC'

const screens = {
  ProductScreen: HOC(ProductScreen),
  ProductDetailScreen,
}
export default screens
