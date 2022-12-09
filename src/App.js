import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import LoginScreen from './components/screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from '../src/feafures/userSlice';
import ProfileScreen from './components/screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          }))
      } else {
        dispatch(logout())
      }
    });
    return unsub;
  }, [])

  return (
    <>
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Route render={props => (
            <>
              <Header {...props} />
              <Routes />
              <Footer />
            </>
          )} />

        )}

      </BrowserRouter>
    </>
  );
}

export default App;