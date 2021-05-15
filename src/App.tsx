import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getCurrentWeather } from 'store/wheather/actions';
import { Provider } from 'react-redux';
import { store } from 'store';
import { MainRouter } from 'routes';


const Deneme = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather())
  },[dispatch])

  return (<div/>);
}

function App() {

 

  return (
   <Provider store={store}>
    
     <MainRouter/>
     <Deneme/>
   </Provider>
  );
}

export default App;
