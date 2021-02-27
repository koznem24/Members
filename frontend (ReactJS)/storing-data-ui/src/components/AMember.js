import React,{Component} from 'react';
import '../styles/aMember.css'
import {Link} from 'react-router-dom';
import '../styles/closeButton.css'
import axios from 'axios';


class AMember extends Component{

	deleteHandler = () =>{
		let requesetString = "http://localhost:8080/member/delete/" + this.props.id;
		axios.get(requesetString)
		.then(response =>{
			
			console.log(response);
		})	
		.catch(errors => { 
			console.log(errors);
		})
		window.location.reload();
	}

	render(){
		const { name, id } = this.props;
		return(
			<div>
				<Link to={{pathname:'/addMember', id : id}}>
					<div className="aMember">
						<span>{name}</span>
					</div>	
				</Link>
				<i id="closeButton" className="fa fa-window-close" onClick={this.deleteHandler}></i>
			</div>
			
		)
	}
}

export default AMember;