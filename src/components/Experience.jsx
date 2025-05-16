  function Experience({value, handleChange}){

    return(
        <> 
      <label htmlFor="Company Name">Company Name: 
            <input type="text"
            name ="company"
            value = {value.company}
            onChange = {handleChange}
             />
        </label>
           <br />
                <label htmlFor="title">Title: 
                    <input 
                        type="text"
                        name="title" 
                        value={value.title}
                        onChange={handleChange}
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




  
