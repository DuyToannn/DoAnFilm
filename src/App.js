import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import Login  from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
      <BrowserRouter>
          <Route render={props => (
              <>
                <Header {...props}/>
                <Routes/>
                <Route exact path='/login'component={Login}/>
                <Route exact path='/signup'component={Signup}/>
                <Footer/>
              </>
          )}/>
      </BrowserRouter>
  );
}

export default App;
