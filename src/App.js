import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  //withRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import './Navbar.css';
import Introduce from './Introduce';
import Article from './Article';
import Explore from './Explore';

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
  constructor(props){
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar data = {fake_data} />
          <Route exact path='/' render = {() => <Introduce data = {fake_data} /> } />
          <Switch>
            <Route path='/search' component={ Explore } />
          </Switch>
          <Switch>
            <Route path='/logout' component={ Logout } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
        

class Navbar extends Component{
  render() {
    return (
      <div>
        <div className = "navbar">
          <div className = "navbar_left">
            <div>NCTU+</div>
            <Link to="/search"><div className = "navbar_div">探索社群</div></Link>
            <Link to="/mine"><div className = "navbar_div">我的社群</div></Link>
          </div>
          <div className = "navbar_image"><img src={this.props.data.image} alt="sorry"/></div>  
          <div className = "navbar_right">
            <Link to="/"><div className = "navbar_div">{this.props.data.id}</div></Link>
            <Link to="/logout"><div className = "navbar_div">登出</div></Link>
          </div>
        </div>   
      </div>
    );
  }
}

class Logout extends Component{
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <div className="display-1">Logout!</div>
          <p>I'm Logout!<br/></p>  
        </div>
      </div>
    )
  }
}

export default App;
