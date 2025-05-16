// import { useState } from "react";

import { useState } from "react"
import Education from "./Education";
import Name from "./Name";
import Experience from "./Experience";


function General(){

    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        degree: "",
        start: "",
        end: "",
        company: "",
        title: "",
        responsibilities: ""
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
      company: value.company,
      title: value.title,
      responsibilities: value.responsibilities
    });
    };

    return (
      <>
      <div className="header">
       <h1>CV</h1>
      </div>

      <div className="content">

       <div className="input">
       <h2>Information</h2>
      <form onSubmit={submitForm}>
      <Name value ={value} handleChange={handleChange}/>
      <h2>Education</h2>
      <Education  value={value} handleChange={handleChange} />
      <h2>Experience</h2>
      <Experience value={value}  handleChange={handleChange} />
      <input type="submit" value="save"/>
      </form>
      </div>

        {/* ///submit value  */}
        <div className="submitted">

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
            <h2>Experience</h2>
            <p>{submittedValue.company}</p>
            <p>{submittedValue.title}</p>
            <p>{submittedValue.responsibilities}</p>
           
        </div>
    
       ) }

       </div>

        </div>
      </>
    );     

}

export default General;


