import React, { useState } from 'react'

export default function UpdatingPizzaState() {
    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"]
    })

    const handleClick = () =>{
        setPizza({
            ...pizza,
            toppings:[...pizza.toppings, "Cheese"]
        })
    }

    return (
        <>
            <div>Pizza Toppings</div>
            <ul>
                {
                    pizza.toppings.map((pizzas)=>(
                        <li>{pizzas}</li>
                    ))       
                }
            </ul>
            <button onClick={handleClick}>Click to change ^</button>
        </>
    )
}
