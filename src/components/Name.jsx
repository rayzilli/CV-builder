  function Name({value, handleChange}){

    return(
        <> 
      <label htmlFor="user name">Full Name: 
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
             </>
    )

  }

  export default Name; 




  
