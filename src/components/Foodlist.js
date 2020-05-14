import React, { Component } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import '../App.css'


const g = [
    {name:"Burger",companyName:"The Borough", Price: 5,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
    {name:"Pizza",companyName:"Macs Brew Bar", Price: 7,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
    {name:"lamb burger",companyName:"Chinese burger", Price: 8,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
    {name:"Cool drink",companyName:"The Borough", Price: 10,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
    {name:"Pizza",companyName:"Macs Brew Bar", Price: 7,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
    {name:"lamb burger",companyName:"Chinese burger", Price: 8,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
    {name:"Cool drink",companyName:"The Borough", Price: 10,image:"https://www.thekiwicountrygirl.com/wp-content/uploads/2015/04/Homemade-Burger-Patties-8.jpg"},
]



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: "white",
    },
    inline: {
      display: 'inline',
    },
  }));


export class Foodlist extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Price:0
        }
    }
    
     getPrice = (e) =>{
            this.setState({
                Price:e.target.value
            })
    }
     

    render() {
   
        
        return (
                          <div style={style.background}>
                
                           <div  style={{width:"100%"}}>
                                  
                           <FormControl style={style.inputbox} size="small" variant="filled" className={useStyles.margin} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                     <OutlinedInput
                                                id="outlined-adornment-amount"
                                                // defaultValue={0}
                                                value={this.state.Pric}
                                                onChange={this.getPrice}
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                labelWidth={60}
                                                variant="filled"
                                                style={{background:"white",}}
                                                 />
                                                </FormControl>
                                  
                           </div>
                            <div style={style.root} >
                                 {console.log(this.state.Price)}
                                 {g.map(e => e.Price <= this.state.Price?
                                 //<li style={{textStyle:"none",listStyleType:"number"}}>{e.name} from {e.companyName}</li>
                                   <List className={useStyles.root} >
                                     <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={e.image} />
                                     </ListItemAvatar>
                                     <ListItemText primary={e.name} secondary={
                                                    <React.Fragment>
                                                     <Typography component="span" className={style.inline} variant="body2" color="textPrimary">{e.companyName}</Typography>{" — I'll be in your neighborhood doing errands this…"}
                                                                                                </React.Fragment>} />
                                  </ListItem>
                                  </List> :"")}
                                     </div>
                     
            </div>
        )
    }
}

const style = {
    background:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"center",
        color:"white",
        width:"80%",
        backgroundImage:"white",
        marginTop:"10vh",
        marginBottom:"10vh",
        borderRadius:'20px',
    },
    root:{
      
        backgroundImage:"linear-gradient(245deg, rgba(38,51,212,1) 0%, rgb(117, 33, 196) 47%, rgba(38,51,212,1) 100%)",
    },
    inline: {
        display: 'inline',
      },
    inputbox:{
        margin:"20px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }
}
export default Foodlist
