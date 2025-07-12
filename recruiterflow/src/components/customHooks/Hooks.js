import { useEffect, useState } from "react"




export const useHooks=()=>{
const [cards,setCards]=useState([])

// calling api to get list of cards
useEffect(()=>{
    fetchCards();
},[])

// function to get cards details form db file
    async function fetchCards(){
        try{
            const result=await fetch('http://localhost:3001/cards');
            const data=await result.json();
            setCards(data)
            
        }catch(error){
            console.error("error",error)
        }
    }


// Deleting the item by id in db.json and state
const deleteCard=async (id)=>{
    console.log("delete id",id)
    try{
        await fetch(`http://localhost:3001/cards/${id}`,{
            method:"DELETE",
        })
        setCards((prev)=>prev.filter((card)=>card.id!==id))
    }catch(error){
        console.log("eroor",error)
    }
}



// adding new cards to db.json 
const addCard=async()=>{
const newId = Math.floor(10 + Math.random() * 90);

    const newCard={
        id:String(newId),
        title:`card ${newId}`,
        body:"this is a card from blog"
    };

    const result=await fetch(`http://localhost:3001/cards`,{
        method:'POST',
       headers: { 'Content-Type': "application/json" },
        body:JSON.stringify(newCard)
    })

   const newCardData = await result.json();
    setCards((prev)=>[...prev,newCardData])
}






    return {cards,deleteCard,addCard}
}