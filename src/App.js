import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';



function App() {
  return <>
 
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route path="/productos">
                <ItemListContainer brand="Horny Store"/>
              </Route>
              
              <Route path="/ItemDetail">
                <ItemDetailContainer/>
              </Route>
            </Switch>
          </BrowserRouter>

  </>
}

export default App;
