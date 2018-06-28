import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewArticle from './NewArticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = 'container'>  

              <div className = 'row'>
                      <div className = 'col-md-4 offset-md-0.5'>
                        <img src ='https://image.flaticon.com/icons/svg/201/201818.svg'  className = 'img-circle'  width = '137' height = '137'/>
                      </div>
                      
                      <div className = 'col-md-4'>
                        <div style = {{ padding: 18, backgroundColor: '#FFFFFF', width: 316, height:138.19 }}> 
                          <div className = 'Word'>
                            姓名：Johnson King <br/> 學號：0516000 <br/> 信箱：abc@gmail.com <br/> 自我介紹：我愛攝影！
                          </div>
                        </div>
                      </div>
              </div>

              <div className='button'>

                <div style={{ padding: 57.81}}>                     
                  <button type='button' className='btn btn-outline-primary'> 交大攝影新手團 </button>
                  <button type='button' className='btn btn-outline-primary'> 攝影愛好者社團 </button>
                  <button type="button" className = "btn btn-outline-warning"> 建立社群 </button>                      
                </div>

              </div>



        </div>        

        <NewArticle />  

      </div>

           
    
    );
  }
}



export default App;
