import React,{Component} from 'react';
import AMember from './AMember';
import axios from 'axios';
import '../styles/listOfMembers.css'


class ListOfMemebers extends Component{

	constructor(props){
		super(props);

		this.state = {
			members: []
		}
	}

	componentDidMount(){
		axios.get("http://localhost:8080/member")
		.then(response => {
			console.log(response);
			this.setState({members:response.data});
		})
		.catch(errors => {
			console.log(errors);
		})

	}

	render(){
		const { members } = this.state;
		return(<div className="listOfMembers">
				<span id="label">MEMBERS</span>
				{
					members.length ?
					members.map(member => <AMember key={member.id} name={member.firstName} id={member.id}/>)
					:null
				}
				
			</div>) ;
	}
}

export default ListOfMemebers;