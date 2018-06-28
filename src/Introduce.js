import React, { Component } from 'react';


class Introduce extends Component{
	contructor(props){
		super(props)
	}
	render(){
		return(
	        <div className = 'container'>  
	          <div class = 'row'>
                  <div class = 'col-md-4 offset-md-1'>
                    <img src ='https://image.flaticon.com/icons/svg/201/201818.svg'  class = 'img-circle'  width = '130' height = '130'/>
                  </div>
                  
                  <div class = 'col-md-4'>
                    <div style = {{ padding: 10, backgroundColor: '#FFFFFF', width: 250, height:130 }}> 
                      <div class = 'Word'>
                        姓名：Johnson King <br/> 學號：0516000 <br/> 信箱：abc@gmail.com <br/> 自我介紹：我愛攝影！
                      </div>
                    </div>
                  </div>
	          </div>
	          <div className='button'>
	            <div style={{ padding: 20}}>                     
	              <button type='button' className='btn btn-outline-primary'> 交大攝影新手團 </button>
	              <button type='button' className='btn btn-outline-primary'> 攝影愛好者社團 </button>
	              <button type='button' className='btn btn-outline-primary'> 建立社群 </button>                  
	            </div>
	          </div>
	    </div>  
		)
	}
}

export default Introduce;