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
		axios.get("http://localhost:8080/members")
		.then(response => {
			console.log(response);
			this.setState({members:response.data});
		})
		.catch(error => {
			console.log(error);
		})

	}

	render(){
		const { members } = this.state;
		return(<div className="listOfMembers">
				<span id="label">MEMBERS</span>
				{
					members.length ?
					members.map(member => <AMember key={member.id} name={member.firstName}/>)
					:null
				}
			</div>) ;
	}
}

export default ListOfMemebers;