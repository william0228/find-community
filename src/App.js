import React, { Component } from 'react';
import {
  BrowserRouter ,
  Link,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import './Navbar.css';
import Feild from './Feild';

const fake_data ={
  id: '0516213',
  image: 'https://avatars1.githubusercontent.com/u/6481273?v=4',
  interest: [{interest: "攝影", rank: "3", article: "攝影請多多指教"}, 
             {interest: "程式設計", rank: "3", article: "程式設計請多多指教"}, 
             {interest: "平面設計", rank: "3", article: "平面設計請多多指教"}, 
             {interest: "剪接影片", rank: "3", article: "剪接影片請多多指教"},
             {interest: "健身", rank: "3", article: "健身請多多指教"}]
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar data={fake_data} />
          <Route exact path='/' render = {() => <Feild data={fake_data} /> } />
          <Switch>
            <Route path='/foo/:bar' component={ Message } />
            <Route path='/foo' component={ Foo } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
        

class Navbar extends Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className = "navbar">
        <div className = "navbar_left">
          <div>NCTU+</div>
          <Link to="/search"><div className = "navbar_div">探索社群</div></Link>
          <Link to="/mine"><div className = "navbar_div">我的社群</div></Link>
        </div>
        <div className = "navbar_image"><img src={this.props.data.image} /></div>  
        <div className = "navbar_right">
          <Link to="/"><div className = "navbar_div">{this.props.data.id}</div></Link>
          <div>登出</div>
        </div>
      </div>   
    );
  }
}

export default App;
