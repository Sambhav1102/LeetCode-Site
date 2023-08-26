import axios from 'axios'
export const apiClient ={
    async get(URL){
        try{
            const response= await axios.get(URL)
            console.log(response);
            return response.data;
        }
        catch(err){
            console.log("Error in fetching data from brainmentors json");
            throw err;
        }
    },
    async post(URL,data){
        try{
            const response = await axios.post(URL,data);
            return response;
        }
        catch(err){
            throw err;
        }
    }
}