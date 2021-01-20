import React, { Component } from 'react';


class Thread extends Component {
    state = {  }

    render() { 
        return ( 
<div>
            <div className='row ' style={{borderBottom:'1px #e2e2e2 solid'}}>
               
                <div className='col-3'>
               
                    <img  src={this.props.dp}className="rounded-circle" style={{width:70,height:70}}></img>
               
                </div>

                <div className="col-9 p-0">
                     <p className="mt-2" style={{marginLeft:-10}}>
                          <span style={{fontSize:20,marginLeft:15}}><b>{this.props.name}</b></span>
                         <span className="float-right" style={{marginRight:15}}><small>{this.props.time}</small></span><br></br>

                         <span className="text-secondary"style={{marginLeft:15}}>{this.props.status}</span>
                     </p>


                </div>

         </div>
               
                   
    </div>

    
              
             );
        }
}
 
export default Thread;