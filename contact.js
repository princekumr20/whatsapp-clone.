import React, { Component } from 'react';
import Thread from './Thread';


class Contact extends Component {
    state = {  }

  

onIconClick(){

   this.props.onIconClick(1);
}
onButtonClick(){
    this.props.onIconClick(2);
}

    render() { 
        return ( 
            
               <div>
                  <div className='row'>
                     <div className='col-12'>
                       <img onClick={() => this.onIconClick()} alt="logo" src={localStorage.getItem("dp")} className="rounded-circle" style={{width:50,height:50}}></img>
                          <button onClick={() =>this.onButtonClick()} className='btn btn-sm  btn-outline-primary float-right mt-2 '>New message</button>
                
                  </div>
                 

</div>
<div className='row mt-2 mb-2'>
                      <div className='col-12 '>
                           <input type='text'placeholder='Search here'className='form-control ' ></input>
                      </div>
                  </div>
                  
                  <div className='row mt-3' style={{borderTop:"1px #e2e2e2 solid"}} >
                      <div className='col-12'>
                             <Thread/>
                    
                </div>

                <div className='col-12'>
                      <Thread/>
                    
                  </div>
                  
                       <div className='col-12'>
                              <Thread/>
                      </div>

                   
                   
                      <div className='col-12'>
                            <Thread/>
                   </div>
           
           
 </div> 
           </div> 
                    
                
                  
                        


             

         );
    }
}
 
export default Contact;