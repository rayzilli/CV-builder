
function Education({value, handleChange}){
  console.log("Education props:", value);
    return (
        <>
          <label htmlFor="degree">Degree: 
                    <input 
                        type="text"
                        name="degree" 
                        value={value.degree}
                        onChange={handleChange}
                    />
                </label>
                <br />

        <label htmlFor="school">School: 
            <input type="text"
            name ="school"
            value = {value.school}
            onChange = {handleChange}
             />
        </label>
           <br />
              
                <label htmlFor="start">Start Date: 
                    <input 
                        type="text"
                        name="start" 
                        value={value.start}
                        onChange={handleChange}
                    />
                </label>
                  <label htmlFor="end">End Date: 
                    <input 
                        type="text"
                        name="end" 
                        value={value.end}
                        onChange={handleChange}
                    />
                </label>
                <br />
     
     </>
    );
}

export default Education;
