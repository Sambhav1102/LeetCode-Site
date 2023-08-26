import { Container } from "@mui/material";
import { Header } from "../../../shared/components/Header";
import Grid from '@mui/material/Grid';
import Question from "../components/Question";
import { Ide } from "../components/Ide.jsx";

export const QuestionPage=()=>{
  
    return(<Container fixed><Header/>
    <Grid container spacing={2}>
        {/* <div className="grid1"> */}
        <Grid item xs={6}>
          
          <Question/>
        </Grid>
        {/* </div> */}
        <Grid item xs={6}>
          <Ide/>
        </Grid>
        </Grid> 
    </Container>);

}