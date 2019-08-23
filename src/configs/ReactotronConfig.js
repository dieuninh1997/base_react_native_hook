import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

Reactotron.clear()
const reactotron = Reactotron
  .configure({
    name: 'Product',
    host: 'localhost',
  })
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false,
  })
  .use(reactotronRedux())
  .connect()

console.tron = Reactotron

export default reactotron
