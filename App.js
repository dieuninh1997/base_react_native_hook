import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import screens from './src/screens'
import store from './src/redux/store'

const AppNavigation = createStackNavigator({
  ProductScreen: { screen: screens.ProductScreen },
  ProductDetailScreen: { screen: screens.ProductDetailScreen },
})

const AppContainer = createAppContainer(AppNavigation)

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
export default App
