import {
  BrowserRouter ,
  Link,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar'

const fake_data ={
  id: '0516213',
  image: 'https://avatars1.githubusercontent.com/u/6481273?v=4'
}


const Router = (props) => (
  <BrowserRouter>
    <div>
      <Route path='/' render = {() => <Navbar data={fake_data} /> } />
      
    </div>
  </BrowserRouter>
)

export default Router;
