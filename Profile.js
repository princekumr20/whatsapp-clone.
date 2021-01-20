import React, { Component } from 'react';

import firebase from 'firebase';

class Profile extends Component {
    state = {  }

    onButtonClick(){
        this.props.onButtonClick(0);
    }

    logout (){
             firebase.auth().signOut().then(() =>{
                 this.props.history.push('/login');
             }).catch(function(error){

             });
             
             


    }
    render() { 
        return ( 
            <div>
                 <div className="row">
                   <div className="col-12"style={{borderBottom:"1px #e2e2e2 solid"}}>
                    <button onClick={() =>this.onButtonClick()} className="btn btn-secondary btn-sm">back</button>
                        <h3 className="text-center">Profile</h3>
                </div>

                <div className="col-12 mt-4">
                    <img  alt="logo"src={localStorage.getItem("dp")} className="rounded-circle" style={{width:150,height:150,display:"block",margin:"auto"}} >

                    </img>

                </div>
                <div className="col-12 mt-5">
                      <p className="text-info"><b>Your name</b></p>
                         <h3 className="text-dark"> {localStorage.getItem('name')}</h3>

                    </div>
                        <div className="col-12 mt-4">
                            <p className="text-info"><b>About</b></p>
                                <h4 className="text-dark">The real man smiles in trouble, gathers strength from distress, and grows brave by reflect</h4>
                    </div>

                    <button onClick={this.logout.bind(this )} className="btn btn-outline-danger mt-3">Sign out</button>
                </div>
            </div>

 


         );
    }
}
 
export default Profile;




 


