import { createStackNavigator } from 'react-navigation'
import Login from './components/login/login.component'
import Orders from './components/orders/orders.component'
import Order from './components/order/order.component'
import Mapview from './components/Mapview'

const RootStack = createStackNavigator(
  {
    login: Login,
    orders: Orders,
    order: Order,
    mapview: Mapview
  },
  {
    initialRouteName: 'login',
    navigationOptions: {}
  }
)

export default RootStack