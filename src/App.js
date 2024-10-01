import Body from "./componenets/Body";
import appStore from "./utils/appStore";
import { Provider } from 'react-redux';

function App() {
  return <Provider store={appStore}>
      <Body />
    </Provider>
}

export default App;
