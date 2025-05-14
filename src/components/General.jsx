// import { useState } from "react";

import { useState } from "react"
import Education from "./Education";
import Name from "./Name";


function General(){

    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        degree: "",
        start: "",
        end: ""
    });

    const [submittedValue, setSubmittedValue] = useState(null);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValue((prevData)=>({
            ...prevData, 
            [name]: value 
        }))

    }


    const submitForm = (e) =>{
        e.preventDefault();
           setSubmittedValue({
      name: value.name,
      email: value.email,
      phone: value.phone,
      school: value.school,
      degree: value.degree,
      start: value.start,
      end: value.end,
    });
    };


    return (
        <>

       <h1>CV</h1>

       {/* //general information  */}
       <h2>general information</h2>
      <form onSubmit={submitForm}>
      <Name value ={value} handleChange={handleChange}/>
    <br />

      <Education  value={value} handleChange={handleChange} />

        <input type="submit" />
      </form>

        {/* ///submit value  */}
        { submittedValue &&(
         <div>
            <h2>Name:</h2>
            <p>{submittedValue.name}</p>
            <p>{submittedValue.email}</p>
            <p>{submittedValue.phone}</p>
            <h2>Education</h2>
            <p>{submittedValue.school}</p>
            <p>{submittedValue.degree}</p>
            <p>{submittedValue.start}</p>
            <p>{submittedValue.end}</p>
           
        </div>
       ) }
       
        </>
    );     

}

export default General;


