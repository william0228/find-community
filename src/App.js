import React, { Component } from 'react';
//import logo from './logo.svg';
import './article.css';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <div class='block'>
           <div class='row'>
            <div class='col-md-4'>
              <div class='font'>我的文章</div>
            <button type="button" class="btn btn-primary">add</button>
          </div>
        </div>

        <div class='content'>
          <img src="https://www.taiwan.net.tw/resources/images/Attractions/0001095.jpg" alt="image" width="386.43"
    height="233.82" class="image">
          </img>
            <div>
              <div class='font-title'>風景照
              </div>
              <button type="button" class="btn btn-success">edit</button>
              <button type="button" class="btn btn-danger">delete</button>
            </div>
          <div class='font-content'>很美的山!</div>
          <button type="button" class="btn btn-link">...more</button>
        </div>

        <div class='content'>
          <img src="https://www.taiwan.net.tw/resources/images/Attractions/0001095.jpg" alt="image" width="386.43"
    height="233.82" class="image">
          </img>
            <div>
              <div class='font-title'>風景照
              </div>
              <button type="button" class="btn btn-success">edit</button>
              <button type="button" class="btn btn-danger">delete</button>
            </div>
          <div class='font-content'>很美的山!</div>
          <button type="button" class="btn btn-link">...more</button>
        </div>

        <div class='content'>
          <img src="https://www.taiwan.net.tw/resources/images/Attractions/0001095.jpg" alt="image" width="386.43"
    height="233.82" class="image">
          </img>
            <div>
              <div class='font-title'>風景照
              </div>
              <button type="button" class="btn btn-success">edit</button>
              <button type="button" class="btn btn-danger">delete</button>
            </div>
          <div class='font-content'>很美的山!</div>
          <button type="button" class="btn btn-link">...more</button>
        </div>

        




      </div>
    </div>
    );
  }
}

export default App;
