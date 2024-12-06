
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Browse from './components/Browse';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';


function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
     <Header/>
     {/* <Browse></Browse> */}
     <Outlet/>
    </div>
    </Provider>
  );
}



export default App;
