import React,{Component} from 'react';
import {Tooltip} from 'react-tippy';
import '../styles/addMember.css';
import 'react-tippy/dist/tippy.css';
import {Redirect} from 'react-router-dom';

import axios from 'axios';


class AddMember extends Component {    

	// This component basically used for two purposes 
	// 1. For adding new member (starts with pure field - sort of)
	// 2. For editing existing member's data (fields are auto-filled)

	constructor(props){
		super(props)

		this.state ={
			id:props.location.id,
			firstName:'', lastName:'', age:'',date:'',passportID:'',
			showToolTip:{firstNameToolTip:false, lastNameToolTip:false, dateToolTip:false,ageToolTip:false,passportIDToolTip:false},
			renderMain:false
		}
	}


	componentDidMount(){  
		if(this.state.id !== undefined){
			let requestString = "http://localhost:8080/member/single/" + this.props.location.id;
			axios.get(requestString)
				.then(
					response => {
						this.setState({
							firstName:response.data.firstName,
							lastName:response.data.lastName, 
							age:response.data.age,
							date:response.data.date,
							passportID:response.data.passportID,
							showToolTip:{firstNameToolTip:false, lastNameToolTip:false, dateToolTip:false,ageToolTip:false,passportIDToolTip:false},
							renderMain:false
						})
					}
				).catch(error =>{
					console.log(error);
				})
				console.log(this.state.id + "    " , this.props.location.id);
		}
	
	}

	changeHandler = event =>{
		
		this.setState({
			[event.target.name] : event.target.value
		})

		if(event.target.name ==="firstName"){	
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.firstNameToolTip = false;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })
		}else if(event.target.name ==="lastName"){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.lastNameToolTip = false;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })
		}else if(event.target.name ==="date"){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.dateToolTip = false;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })
		}else if(event.target.name ==="age"){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.ageToolTip = false;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })
		}else if(event.target.name ==="passportID"){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.passportIDToolTip = false;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })
		}
		
	}

	isPass = () => {
		console.log(this.state.date);
		if(this.state.firstName.trim() === ''){

			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.firstNameToolTip = true;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })

			return false;
		}else if(this.state.lastName.trim() === ''){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.lastNameToolTip = true;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })

			return false;
		
		}else if(this.state.age <=0){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.ageToolTip = true;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })

			return false;
		}else if(this.state.date.trim() === ''){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.dateToolTip = true;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })

			return false;
		}else if(this.state.passportID.trim() === ''){
			this.setState(prevState => {
				let showToolTip = { ...prevState.showToolTip};               // creating copy of state variable jasper
				showToolTip.passportIDToolTip = true;                  	    // update the name property, assign a new value                 
				return { showToolTip };                                    // return new object jasper object
			  })

			return false;
		}


		return true;
	}
	

	submitHandler = (event) =>{                                       // This method handles submit operation on the form
		
		if(this.isPass()){
			let toSend = this.seperateObjectsFromState();

			if(this.state.id == undefined){                            // if edit is not purpose
				axios.post("http://localhost:8080/member", toSend)
					.then(response => {
						console.log(response)
					})
					.catch(error => {
						console.log(error);
					})
					this.setState({
						renderMain: true
					})
			}else{                                                      // if edit is the purpose
				axios.post("http://localhost:8080/member/single", toSend)
					.then(response => {
						console.log(response)
					})
					.catch(error => {
						console.log(error);
					})
					this.setState({
						renderMain: true
					})
			}
			
		}else{
			event.preventDefault();
		}
		
	}

	seperateObjectsFromState = () => {                                  // This method is for seperating objects being sent (submit)
		let toSend = {
			id: this.state.id,
			firstName:this.state.firstName, 
			lastName:this.state.lastName, 
			age:this.state.age, 
			date: this.state.date, 
			passportID:this.state.passportID
		}
		return toSend;
}

	render(){
		const {firstName,lastName, age, date,passportID} = this.state;
		const {firstNameToolTip,lastNameToolTip, ageToolTip,dateToolTip,passportIDToolTip} = this.state.showToolTip;
		if(!this.state.renderMain){
			return(
				<div className="addMember">
					<form onSubmit={this.submitHandler}>	
						<table className="mainTable" >
							<tbody>
								<tr id="tr">
									<td><label>First Name</label></td>
									<td>
										<Tooltip placement="right" arrow="true" title ="Please enter your first name!" open={firstNameToolTip}>
										<input type="text" name="firstName" value={firstName} onChange = {this.changeHandler} />
										</Tooltip>
									</td>
								</tr>
								<tr>
									<td><label>Last Name</label></td>
									<td>
										<Tooltip placement="right" arrow="true" title ="Please enter you last name!" open={lastNameToolTip}>
											<input type="text" name="lastName" value={lastName} onChange = {this.changeHandler}/>
										</Tooltip>
									</td>
								</tr>
								<tr>
									<td><label>Age</label></td>
									<td>
										<Tooltip placement="right" arrow="true" title ="Please enter your age" open={ageToolTip}>
											<input type="number" name="age" value={age} onChange = {this.changeHandler}/>
										</Tooltip>
									</td>
								</tr>
								<tr>
									<td><label>Date</label></td>
									<td>
										<Tooltip placement="right" arrow="true" title ="Please enter you last name!" open={dateToolTip}>
											<input type="date" name="date" value={date} onChange = {this.changeHandler}/>
										</Tooltip>
									</td>
								</tr>
								<tr>
									<td><label>Passport ID</label></td>
									<td>
										<Tooltip placement="right" arrow="true" title ="Please enter you last name!" open={passportIDToolTip}>
											<input type="text" name="passportID" value={passportID} onChange = {this.changeHandler}/>
										</Tooltip>
									</td>
								</tr>
							</tbody>
	
						</table>
						
						<button type="button" value="Submit" onClick={this.submitHandler}>Submit</button>
					</form>	
				</div>
			)
		}else{
			this.forceUpdate();                          // This is to prevent old values to be kept when user wants to add completely new user
			return(<Redirect to='/'/>)
		}	
	}
}

export default AddMember;