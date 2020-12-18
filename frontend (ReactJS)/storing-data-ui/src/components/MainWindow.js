import React,{Component} from 'react';
import ListOfMembers from './ListOfMembers';
import '../styles/mainWindow.css';
import {Link} from 'react-router-dom';

class MainWindow extends Component{
	render(){
		return (
			<div className="mainDiv">

					<Link to='/addMember'>
						<div className="addMembersLink">
							<text><strong>Add new member</strong></text>
						</div>
					</Link>
				
				
					<Link to='/listOfMembers'>
						<div className="listOfMembersLink">
							<text><strong>Show all members</strong></text>
						</div>
					</Link>
				
			</div>
		);
	}
}

export default MainWindow;