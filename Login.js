import React, { Component } from 'react';
import firebase from 'firebase';




class Login extends Component {
    state = {  }

    componentDidMount(){

        firebase.auth().onAuthStateChanged((user) =>   {
            if (user) {
              // User is signed in.
              
           this.props.history.push('');
              
             
  
            }
            
          
          } );
        
  


    }


    render() { 
        return (
            <div>
                    
                    <div className='navbar'>
                        <h4 className='text-white'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/766px-WhatsApp.svg.png" className='image' ></img>
                          Whatsapp  </h4>

                    </div>


                    <div className='container'>
                        <div className='row'>
                          <div className='col-6 offset-3'>
                              <div className='card'>
                                  <div className='card-body'>
                                      <h3 className='display-4'>
                                         To chat with someone you have to sign up with,
                                         Google.</h3>
                                      </div>

                                      <button onClick={this.click.bind(this)}className='btn btn-outline-secondary '  className='text-black' >Sign in</button>
                                  </div>
                                  
                              </div>
                          </div>

                     </div>
                        
                  

            </div>
          );
    }
}
 
export default Login;