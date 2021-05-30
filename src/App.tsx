import { Provider } from 'react-redux';
import { store } from 'store';
import { MainRouter } from 'routes';




function App() {

 

  return (
   <Provider store={store}>
    
     <MainRouter/>
   </Provider>
  );
}

export default App;
