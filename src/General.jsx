// import { useState } from "react";

import { useState } from "react"

function General(){

    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: ""
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
        setSubmittedValue(value);
    }

    return (
        <>

       <h1>CV</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="user name">Name: 
            <input type="text"
            name ="name"
            value = {value.name}
            onChange = {handleChange}
             />
        </label>
           <br />
                <label htmlFor="email">Email: 
                    <input 
                        type="text"
                        name="email" 
                        value={value.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label htmlFor="phone">Phone: 
                    <input 
                        type="text"
                        name="phone" 
                        value={value.phone}
                        onChange={handleChange}
                    />
                </label>
                <br />
        <input type="submit" />
      </form>

        { submittedValue &&
         <div>
            <h2>Name:</h2>
            <p>{submittedValue.name}</p>
            <p>{submittedValue.email}</p>
            <p>{submittedValue.phone}</p>
            {/* <p>{value.name}</p>
            <p>{value.email}</p>
            <p>{value.phone}</p> */}
        </div>
        }
       
        </>
    )        

    
}

export default General
