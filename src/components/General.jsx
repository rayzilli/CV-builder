// import { useState } from "react";


import { useState } from "react"
import Education from "./Education";
import Name from "./Name";
import Experience from "./Experience";
import  "./css/General.css";


function General(){

    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        degree: "",
        start: "",
        end: "",
        title: "",
        company: "",
        exStart: "",
        exEnd: "",
        responsibilities: "",
    });

    const [submittedValue, setSubmittedValue] = useState(true);

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
      degree: value.degree,
      school: value.school,
      start: value.start,
      end: value.end,
      company: value.title,
      title: value.company,
      exStart: value.exStart,
      exEnd: value.exEnd,
      responsibilities: value.responsibilities
    });
    };

    return (
      <>
      <header>
       <h1>CV Creator</h1>
      </header>

      <div className="content">

       <div className="input">
        <h2>Create your CV</h2>
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
            <h2 id="header-name">Name:</h2>
            <ul className="info">
              <li className="name">{submittedValue.name}</li>
              <li className="email-phone">
                <span className="email">{submittedValue.email}</span>
                <span className="phone">{submittedValue.phone}</span>
              </li>
          
            </ul>

            <h2>Education</h2>
            <ul className="education">
              <li className="degree">{submittedValue.degree}</li>
              <li className="school">{submittedValue.school}</li>
              <li className="dates-attended">   
                 <span className="start">{submittedValue.start}</span>
                 <span>-</span>
                <span className="end">{submittedValue.end}</span>
              </li>
          
            </ul>
    
            <h2>Experience</h2>
            <ul className="experience">
               <li className="title">{submittedValue.title}</li>
              <li className="company">{submittedValue.company}</li>
              <li className="dates-attended">
                <span className="exStart">{submittedValue.exStart}</span>
                <span>-</span>
                <span className="exEnd">{submittedValue.exEnd}</span>
              </li>
              <li className="responsibilities">{submittedValue.responsibilities}</li>
            </ul>
           
        </div>
    
       ) }

       </div>

        </div>
      </>
    );     

}

export default General;


