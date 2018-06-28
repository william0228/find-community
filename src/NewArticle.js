import React, { Component } from 'react';
import './App.css';



class NewArticle extends Component {
	render(){
		return(
			<div className = 'NewArticle'>
			    <div className = 'navBar'> </div>
			        <div className = 'background'> 

			          <div className = 'title'>標題：</div>
			          <div className = 'titleBox'> </div>

			          <div className = 'content'>內容：</div>
			          <div className = 'contentBox'>
			              <div className = 'col-md-4 offset-md-9'>
			              <button type="button" className = "btn btn-outline-primary">相片</button>
			              <button type="button" className = "btn btn-outline-primary">檔案</button>
			              </div>
			          </div>
			            <div style = {{padding:35}}>

			               <button type="button" className = "btn btn-outline-warning">取消</button>
			               <button type="button" className = "btn btn-outline-warning">確認</button>

			            </div>



                 </div>
			</div>

			)
	}
}

export default NewArticle;