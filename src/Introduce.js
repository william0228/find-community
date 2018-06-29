import React, { Component } from 'react';
import './Introduce.css'
import './Feild.css';
import Article from './Article';

const fake_data ={
  id: '0516213',
  image: 'https://avatars1.githubusercontent.com/u/6481273?v=4',
  interest: [{interest: "攝影", rank: "3", article: "攝影請多多指教"}, 
             {interest: "程式設計", rank: "3", article: "程式設計請多多指教"}, 
             {interest: "平面設計", rank: "3", article: "平面設計請多多指教"}, 
             {interest: "剪接影片", rank: "3", article: "剪接影片請多多指教"},
             {interest: "健身", rank: "3", article: "健身請多多指教"}]
}

class Introduce extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: this.props.data
		}
	}

	componentDidMount() {
		fetch('http://460a4be6.ngrok.io/user?user_id=1',{
      mode: 'cors'
    })
    .then(response => {
      if(!response.ok)
        console.log('fetching Error')
      return response.json();
    })
    .then(data => 
    	this.setState({
      	data: data
    	}))
	}

	render(){
		return(
			<div>
			    <div className = 'Introduce_container'>  
			       	<div class = 'row'>
		                <div class = 'col-md-4 offset-md-1'>
		                	<img src ='https://image.flaticon.com/icons/svg/201/201818.svg' alt="sorry" class = 'img-circle'  width = '130' height = '130'/>
		                </div>
		                  
		                <div class = 'col-md-4'>
		                    <div style = {{ padding: 10, backgroundColor: '#FFFFFF', width: 250, height:130 }}> 
		                    	<div class = 'Word'>
		                        	姓名：{this.state.data.name} <br/> 學號：{this.state.data.id} <br/> 信箱：{this.state.data.email} <br/> 自我介紹: {this.state.data.description}
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
				<div className = "Introduce_right">
					<Feild data = {fake_data}/>
				</div>
				<div className = "Introduce_a">
					<Article data={this.state.data}/>
				</div>
	   		</div>
		)
	}
}

class Feild extends Component{
	constructor(props){
		super(props)
		this.content = this.content.bind(this)
	}

	content(e){
		alert(this.props.data.interest[e].article);
	}

	render(){
		return(
			<div className = "feild">
				
				<div className = "feild_left">
					<div className = "feild_dd" onClick = { () => this.content(0) }>{this.props.data.interest[0].interest}</div>
					<div className = "feild_dd" onClick = { () => this.content(1) }>{this.props.data.interest[1].interest}</div>
					<div className = "feild_dd" onClick = { () => this.content(2) }>{this.props.data.interest[2].interest}</div>
					<div className = "feild_dd" onClick = { () => this.content(3) }>{this.props.data.interest[3].interest}</div>
					<div className = "feild_dd" onClick = { () => this.content(4) }>{this.props.data.interest[4].interest}</div>
				</div>
				<div className = "feild_right">
					<div className = "feild_new">新手</div>
					<div className = "feild_old">老手</div>
					<Line />
					<Line />
					<Line />
					<Line />
					<Line />
					<div className = "feild_edit">edit</div>
				</div>
			</div>
		);
	}
}

class Line extends Component{
	render(){
		return(
			<div className = "feild_div">
				<img className = "feild_image" src="https://i.imgur.com/wLpHlea.png" alt="sorry"/>
			</div>
		)
	}
}


export default Introduce;