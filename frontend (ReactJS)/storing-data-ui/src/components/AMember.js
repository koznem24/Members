import React,{Component} from 'react';
import '../styles/aMember.css'

class AMember extends Component{
	render(){
		const { name } = this.props;
		return(
			<div className="aMember">
				<span>{name}</span>
			</div>
		)
	}
}

export default AMember;