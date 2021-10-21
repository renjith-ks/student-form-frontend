
import React,{Component } from 'react'
import StudentServices from '../Services/StudentServices';


export class StudComp extends Component{
    constructor(props){
        super(props)
        this.state={
            stud:[]
        }
    }

    componentDidMount(){

        StudentServices.getusers().then((response)=>{
            
            console.log(response);
            this.setState({stud:response.data});
        });
    }
    render(){
        return(
            <div>   


                 <table class="table">
                     <thread>
                         <tr><th>id</th><th>name</th><th>dob</th><th>class</th><th>division</th><th>gender</th></tr>
                     </thread>
                
                 <tbody>
                     {
                       this.state.stud.map(
                           stud=>
                           <tr>


                               <td>{stud.id}</td>
                               <td>{stud.name}</td>
                               <td>{stud.date}</td>
                               <td>{stud.list1}</td>
                               <td>{stud.division}</td>
                               <td>{stud.gender}</td>
                           </tr>    

                       )


                     } 
                     
                 </tbody>   
                 </table> </div> 


          



        );
    }
}


export default StudComp;