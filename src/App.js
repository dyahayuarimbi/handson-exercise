import './App.css';
import Search from './pages/Home';
import {Provider} from 'react-redux';
import Store from './store'
function App() {
  return (
    <Provider store={Store}>
      <Search />
    </Provider>
  );
}

export default App;