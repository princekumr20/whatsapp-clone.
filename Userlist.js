import React, { Component } from 'react';
import Thread from './Thread';
import firebase from 'firebase';


class Userlist extends Component {
    state = {  
       Users :{ }
    }

 
 loadUser (){
     return Object.keys(this.state.users).map((key ) => {
        if(key !== localStorage.getItem('user_id'))
{
    return <div className='col-12'>
        <Thread className={this.state.users[key]['name']} dp={this.state.users[key]['dp']} status="Hey there! I am on Whatsapp" ></Thread>
    </div>
}

     })
 }

   
    



onButtonClick(){

  this.props.onButtonClick(0);


}
componentDidMount(){

    firebase.database().ref('users/').once('value') .then((snapshot)=>{
        console.log(snapshot.val());
        this.setState({users:snapshot.val()});

    })
}

    render() { 
        return (
                
            <div>
                  <div className="row">
                      <div  className="col-12">
                         
                                <button onClick={() => this.onButtonClick()} className="btn btn-sm btn-outline-secondary  mt-2">Go back</button>
                              <h4 className='mt-3'>All Users</h4>  

               
                      </div>
                  </div>

                                <div className="row mt-2 mb-2">
                                    <div className="col-12">
                                        <input type="text" className="form-control" placeholder="Search here"></input>
                      </div>
                  </div>

                  <div className="row mt-3" style={{borderTop:"1px #e2e2e2 solid"}}>
                          {
                          () =>this.props.loadUser()
                          }

                          
         </div>

   </div> 
             


          );
    }
}
 
export default Userlist;
                
