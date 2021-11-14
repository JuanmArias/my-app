import React from 'react';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import CarouselNav from './components/Carousel';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';



function App() {
  return <>
 
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={CarouselNav}/>

      <Route path="/productos" component={ItemListContainer}/>
      
      <Route path="/itemDetail/:title" component={ItemDetailContainer}/>
    </Switch>
  </BrowserRouter>

</>
}

export default App;