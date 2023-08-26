import { Typography , Box, Toolbar, Button} from '@mui/material'
import React, { useState } from 'react'
import { apiClient } from '../../../shared/services/api-client'
const Question=()=> {
    const [data,setData]= useState(null);
    const getQuestion=async ()=>{
        const response = await apiClient.get(process.env.REACT_APP_QUESTION_URL)
        console.log(response);
        setData(response)
    }
        // getQuestion();
    
    return(
        <Box id="YA" backgroundColor='white' sx={{height:550, width:550, mt:2}}>  
            <div>
            <button onClick={getQuestion}>Click here</button>
            {data==null?'Loading.....':<h2>{data.question}</h2>}
            </div>
        </Box>   
    )
}
export default Question