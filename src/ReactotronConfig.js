import Reactotron from 'reactotron-react-js'
import { reactotronRedux} from 'reactotron-redux'

Reactotron.configure({name : "leejae"})
    .use(reactotronRedux()) //make reactotronRedux object
    .connect()

export default Reactotron