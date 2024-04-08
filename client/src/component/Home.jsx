import React, { useContext } from 'react'
import { Button, Grid } from '@mui/material';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  
  const {users} = useContext(AppContext);
  const navigate = useNavigate();


  const handleOnclick = ()=>{
    navigate('/edituser');
  }

  

  return (
   <>
   <h2 style={{textAlign:'center'}}>User List</h2>
   <div className="maincontainer" style={{
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    margin:'50px'
   }}>

    
    
    <Grid container spacing={2} style={{ width:'90vw', gap:'1.5rem', alignItems:'center', justifyContent:'center'}} >
     {users.map((item)=>{
       return <>
          <Grid item xs={12} sm={6} md={3} style={{border:'1px solid black'}} >
          <p>name : {item.name}</p>
          <p>email : {item.email}</p>
          <p>username : {item.username}</p>
          <p>phone : {item.phone}</p>

         <Button variant='contained' color='secondary' onClick={handleOnclick}>Update Info</Button>
         </Grid>
       </>
     })}
    </Grid>
   </div>  
   </>
  )
}

export default Home
