import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
	render(){
		return(
			<div class='l-block'>
				<div class='navbar'>NCTU+
				</div>

				<div class='l-block2'></div>
				
					<div class="input-group input-group-sm mb-3 w-140 ">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="inputGroup-sizing-sm"> 姓 名 :</span>
  				</div>
  					<input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  					</input>
					</div>
					
					<div class="input-group input-group-sm mb-3 w-140 ">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="inputGroup-sizing-sm"> 學	號 :</span>
  				</div>
  					<input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  					</input>
					</div>

					<div class="input-group input-group-sm mb-3 w-140 ">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="inputGroup-sizing-sm">信 箱 :</span>
  				</div>
  					<input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  					</input>
					</div>

					<div class="input-group input-group-sm mb-3 w-140 ">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="inputGroup-sizing-sm">帳  號 :</span>
  				</div>
  					<input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  					</input>
					</div>

					<div class="input-group input-group-sm mb-3 w-140 ">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="inputGroup-sizing-sm">密  碼  :</span>
  				</div>
  					<input type="password" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  					</input>
					</div>

					<div class="input-group input-group-sm mb-3 w-140 ">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="inputGroup-sizing-sm">確認密碼:</span>
  				</div>
  					<input type="password" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  					</input>
					</div>

					<button type="button" class="btn btn-warning">註冊</button>

					
		
	
			</div>
			

		)
	}
}

export default Login;