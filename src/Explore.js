import React, {Component} from 'react';
import './Explore.css';

class Explore extends Component{
	render(){
		return(
			<div class='e-block'>
				<div class='e-title'>
					<div class='title-1'>名稱</div>
					<div class='title-2'>類型</div>
					<div class='title-3'>級別</div>
					<div class='title-3'>人數</div>
				</div>
				<div class='list'>
					<div class='listblock'>
						<div class='title-4'>攝影愛好者社群</div>
						<div class='title-5'>攝影</div>
						<div class='title-6'>新手</div>
						<div class='title-6'>59</div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>

					<div class='listblock'>
						<div class='title-4'></div>
						<div class='title-5'></div>
						<div class='title-6'></div>
						<div class='title-6'></div>
						<button type="button" class="btn btn-outline-warning">詳情</button>
						<button type="button" class="btn btn-outline-warning">加入</button>
					</div>
				</div>
				<div class='sort'>
					<div class="input-group mb-3">
  						<input type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  						<div class="input-group-append">
    					<button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
  						</div>
					</div>
					<form class='search-check'>
						<div class="form-group form-check">
	    				<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
	    				<label class="form-check-label" for="exampleCheck1">熱門</label>
	  					</div>

	  					<div class="form-group form-check">
	    				<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
	    				<label class="form-check-label" for="exampleCheck1">最新</label>
	  					</div>

	  					<div class="form-group form-check">
	    				<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
	    				<label class="form-check-label" for="exampleCheck1">新手</label>
	  					</div>

	  					<div class="form-group form-check">
	    				<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
	    				<label class="form-check-label" for="exampleCheck1">中間</label>
	  					</div>

	  					<div class="form-group form-check">
	    				<input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
	    				<label class="form-check-label" for="exampleCheck1">老手</label>
	  					</div>
	  				</form>
	  				<div class='sort-group'>
	  					<button type="button" class="btn btn-secondary">平面設計</button>
	  					<button type="button" class="btn btn-secondary">程式設計</button>
	  					<button type="button" class="btn btn-secondary">攝影</button>
	  					<button type="button" class="btn btn-secondary">健身</button>
	  					<button type="button" class="btn btn-secondary">UI/UX</button>
	  					<button type="button" class="btn btn-secondary">影片製作</button>
	  					<button type="button" class="btn btn-secondary">前端設計</button>
	  					<button type="button" class="btn btn-secondary">後端設計</button>
	  					<button type="button" class="btn btn-secondary">...more</button>
	  					<button type="button" class="btn btn-warning">確認</button>
	  				</div>
				</div>
			</div>
			)
		}
	}

export default Explore;