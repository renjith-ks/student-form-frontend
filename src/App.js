import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';






const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      list1: '',
      division:'',
      gender:''
    },
    validationSchema: yup.object({
      name: yup.string()
        .required("Name is required")
        .min(5, "Minimum 5 characters is required")
        .max(10, "Maximum 10 characters  only"),
        date:yup.string()
        .required("Date is required"),  
      list1:yup.string()
        .required("Class is required"),
      division:yup.string()
        .required("Division is required "),
        gender:yup.string().oneOf(["male","female"],"Required").required("Gender is required ")
        
             
     
        
          
        
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);

    }
  })

  return (
   
    
    <div className="container " >
    
      <h1>STUDENT DATA</h1> 
      <form autoComplete="off" onSubmit={formik.handleSubmit} >


        <div className="form-group" >
          <label>NAME:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ?
            <div className="text-danger">{formik.errors.name}</div>
            : null
          }
        </div><br/>




        <div className="form-group" >
          <label>DOB:</label>
          <input
            className="form-control"
            type="date"
            name="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.errors.date ?
            <div className="text-danger">{formik.errors.date}</div>
            : null
          }
        </div><br/>



        <div >
          <label>CLASS:</label>
          <select
            name="list1"
            onChange={formik.handleChange}
            value={formik.values.list1}
            className="form-select">
            <option value="">...select class...</option>
            <option value="1">I </option>
            <option value="2"> 	II</option>
            <option value="3"> III</option>
            <option value="4"> 	IV</option>
            <option value="5"> V</option>
            <option value="6">	VI</option>
            <option value="7">	VII</option>
            <option value="8">	VIII </option>
            <option value="10">	X </option>
            <option value="11">XI </option>
            <option value="12">	XII </option>


          </select>
          {formik.errors.list1 ?
            <div className="text-danger">{formik.errors.list1}</div>
            : null
          }

        </div><br/>


        <div >
          <label>DIVISION:</label>
          <select
            name="division"
            onChange={formik.handleChange}
            value={formik.values.division}
            className="form-select">
            <option value="">...select division...</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
            {formik.errors.division ?
            <div className="text-danger">{formik.errors.division}</div>
            : null
          }
          </div><br/>



          <FormControl>
               <label>GENDER:</label>
                <RadioGroup row
                 name="gender"
                 onChange={formik.handleChange}
                 value={formik.values.gender}
                >
                   <FormControlLabel value="male" control={<Radio />} label="male"/>
                   <FormControlLabel value="female" control={<Radio />} label="female"/>
                </RadioGroup>
          </FormControl>
          {formik.errors.gender ?
            <div className="text-danger">{formik.errors.gender}</div>
            : null
          }
        <br/><br/> 
        <button className="btn btn-primary">Submit</button>
      </form>
      </div>
  
      
    
  )
}



export default App;