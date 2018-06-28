import React, {Component} from 'react';
import './Feild.css';

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
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className = "feild_div">
				<img className = "feild_image" src="https://i.imgur.com/wLpHlea.png"/>
			</div>
		)
	}
}

class Bottom extends Component{
	render(){
		return(
			<div>
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				  Launch demo modal
				</button>

				<div class="modal fade" id="exampleModal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				        ...
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" class="btn btn-primary">Save changes</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}


export default Feild;