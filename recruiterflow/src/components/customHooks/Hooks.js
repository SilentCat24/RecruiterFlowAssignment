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




    return {cards}
}