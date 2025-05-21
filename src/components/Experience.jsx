  function Experience({value, handleChange}){

    return(
        <> 
         <label htmlFor="title">Title: 
                    <input 
                        type="text"
                        name="title" 
                        value={value.title}
                        onChange={handleChange}
                    />
                </label>
                <br />
      <label htmlFor="Company Name">Company Name: 
            <input type="text"
            name ="company"
            value = {value.company}
            onChange = {handleChange}
             />
        </label>                <br />
      <label htmlFor="exStart">Start Date: 
            <input type="text"y
            name ="exStart"
            value = {value.exStart}
            onChange = {handleChange}
             />
        </label>       <br />
      <label htmlFor="Company Name">End Date: 
            <input type="text"
            name ="exEnd"
            value = {value.exEnd}
            onChange = {handleChange}
             />
        </label>

           <br />
               
                <label htmlFor="responsibilities">Responsibilities: 
                    <textarea
                        name="responsibilities" 
                        value={value.responsibilities}
                        onChange={handleChange}
                        rows={4}
                        cols={20}
                    />
                </label>
             </>
    )

  }

  export default Experience; 




  
