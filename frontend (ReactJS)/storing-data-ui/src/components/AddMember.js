import React,{Component} from 'react';
import '../styles/addMember.css';
import axios from 'axios';
class AddMember extends Component {

	constructor(props){
		super(props)

		this.state ={
			firstName:'',
			lastName:'',
			date:'',
			age:'',
			passportID:''
		}
	}

	changeHandler = e =>{
		this.setState({[e.target.name] : e.target.value})
	}

	submitHandler = e =>{
		e.preventDefault();
		console.log(this.state);
		axios.post("http://localhost:8080/members", this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error);
			})
	}

	render(){
		return(
			<div className="addMember">
				<form onSubmit={this.submitHandler}>	
					<table className="mainTable" >
						<tr id="tr">
							<td><label>First Name</label></td>
							<td><input type="text" name="firstName" value={this.state.firstName} onChange = {this.changeHandler}/></td>
						</tr>
						<tr>
							<td><label>Last Name</label></td>
							<td><input type="text" name="lastName"value={this.state.lastName} onChange = {this.changeHandler}/></td>
						</tr>
						<tr>
							<td><label>Age</label></td>
							<td><input type="number" name="age"value={this.state.age} onChange = {this.changeHandler}/></td>
						</tr>
						<tr>
							<td><label>Date</label></td>
							<td><input type="date" name="date" value={this.state.date} onChange = {this.changeHandler}/></td>
						</tr>
						<tr>
							<td><label>Passport ID</label></td>
							<td><input type="text" name="passportID" value={this.state.passportID} onChange = {this.changeHandler}/></td>
						</tr>

					</table>
					
					<button type="Submit" value="Submit">Submit</button>
				</form>	
			</div>
		)
	}
}

export default AddMember;