import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHooks } from './customHooks/Hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './Cards.css';

const Cards = () => {
    const {cards,deleteCard,addCard}=useHooks();
  return (
    <div className='CardsSection'>
    <div style={{
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    flexWrap:'wrap' ,
    margin:"0rem 2rem"
    }}>
{
cards && cards.length>0 ? (
    cards.map((item,index)=>(
                   <Card  key={index}
                    sx={{ maxWidth: 545,margin:3}}   
                    >
        <CardMedia
        sx={{ height: 190,width:250 }}
             image="https://picsum.photos/200/300.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {item.body}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent:"space-between"
      }}>
        <Button size="small">Share</Button>
        <Button size="small"  onClick={()=>deleteCard(item.id)}>
            <DeleteIcon/>
        </Button>
      </CardActions>
    </Card>
    ))

):(
    console.log("no cards exist")
)
}
  <Button size="small"  variant="contained"onClick={addCard} style={{
        height:"40px"
  }}>
         Add New Card<AddIcon/>
        </Button>
    </div>


    </div>
  )
}

export default Cards