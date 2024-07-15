import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Planilla from './components/Planilla';
import Login from './components/login';

function App() {
  return (
    <Provider store={store}>
      <Login />
      <Planilla />
    </Provider>
  );
}

export default App;
