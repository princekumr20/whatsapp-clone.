import React, { Component } from 'react';
import Contact from './contact';
import firebase from 'firebase';
import Profile from './Profile';
import Userlist from './Userlist';
import firebaseConfig from './firebaseconfig'



class Home extends Component {

state ={
  flag : 0
 }


  componentDidMount  () {
   // firebase.initializeApp(firebaseConfig);

           
   firebase.auth().onAuthStateChanged((user) =>   {
          if (user) {
            // User is signed in.

            console.log(user);
          } else {
            // No user is signed in.
            console.log('Not logged in');
            this.props.history.push('/login')
            
           }
        
        });
      }

  loadComponent(){
    if(this.state.flag === 0){
          return<Contact onIconClick={this.replaceComponent.bind(this)}/>
  } else if(this.state.flag === 1) {
       return<Profile onButtonClick={this.replaceComponent.bind(this)}/>

  }else{
       return<Userlist onButtonClick={this.replaceComponent.bind(this)}/>

  }

}
     replaceComponent(flag){
       
      this.setState({flag:flag});

     }
      
      
render() {
     
    
        return (
          <div>
            <div className='container mt-5'>
                <div className='row '>
                    <div className='col-12'>
                    <div className='card' style={{height:700 }} >
                       <div className='card-body'>
                         <div className="row">
                          <div className='col-4'>
                              {this.loadComponent()}
                              

                               
                            </div>  
                        
                             <div className='col-8'>
                               </div>                     
                            
                        </div>
                     </div>

                  </div>
              
                </div>
             
            </div>
      </div>

  </div>


         );
            
        
      }
    }
    
      

export default Home;
