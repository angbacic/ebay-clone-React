import React from 'react';
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom';
import store from './store'
import AdvertsListContainer from './components/AdvertsListContainer'
import AdvertDetailsContainer from './components/AdvertDetailsContainer'
import CreateAdvertFormContainer from './components/CreateAdvertFormContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdvertsListContainer} />
          <Route path="/" exact component={CreateAdvertFormContainer} />
          <Route path="/adverts/:id" component={AdvertDetailsContainer} />
          
        </div>
      </Provider>
    </div>
  );
}

export default App;
