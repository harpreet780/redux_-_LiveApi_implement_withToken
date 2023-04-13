import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store/store"
import { HandleRouters } from './constant/createRouters';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <HandleRouters />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
