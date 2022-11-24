
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import SignIn from './Components/Pages/SignIn/SignIn';
import SignUp from './Components/Pages/SignUp/SignUp';
import TakeNote1 from './Components/TakeNote1/TakeNote1';
import TakeNote2 from './Components/TakeNote2/TakeNote2';
import TakeNote3 from './Components/TakeNote3/TakeNote3';
import store from './Components/Pages/Redux/Store';
import RouterOne from './Components/Pages/Router/router';


function App() {
  return (
    <div className="App">

      {/* <SignUp />  */}

      {/* <SignIn /> */}

      {/* <Header />  */}

      {/* <TakeNote1 /> */}

      {/* <TakeNote2 /> */}

      {/* <TakeNote3 />  */}
      
      {/* <Dashboard /> */}

      <Provider store={store}>
      {/* <Dashboard /> */}
      <RouterOne />
      </Provider>
      

    </div>

  );
}

export default App;
