import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHooks } from './customHooks/Hooks';
import DeleteIcon from '@mui/icons-material/Delete';


const Cards = () => {
    const {cards}=useHooks();
  return (
    <div style={{
        display:"flex",
    flexWrap:'wrap' ,
    margin:"0rem 2rem"
    }}>
{
cards && cards.length>0 ? (
    cards.map((item,index)=>(
                   <Card  key={index} sx={{ maxWidth: 545,margin:3}}>
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
     This is a Card 1
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent:"space-between"
      }}>
        <Button size="small">Share</Button>
        <Button size="small">
            <DeleteIcon/>
        </Button>
      </CardActions>
    </Card>
    ))

):(
    console.log("no crads exist")
)
}
    </div>
  )
}

export default Cards