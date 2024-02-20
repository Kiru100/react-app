import React, { useState } from 'react'

export default function UpdatingPizzaState() {
    const [carts, setCart] = useState({
        discount: .1,
        items:[
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 1}
        ]
    })

    const handleClick = (selected_cart_index: number, increase: boolean) =>{
        const updated_cart_items = [...carts.items];
        const updated_quantity = (increase) ? (updated_cart_items[selected_cart_index].quantity + 1) : (updated_cart_items[selected_cart_index].quantity - 1)

        updated_cart_items[selected_cart_index] = {
            ...updated_cart_items[selected_cart_index],
            quantity: updated_quantity
        }

        setCart({...carts, items: updated_cart_items})
    }

    return (
        <>
            <div>Pizza Toppings</div>
            <ul>
                {
                    carts.items.map((cart, index)=>(
                        <li>
                            <span>Title:{cart.title}</span>
                            <span>| Quantity: 
                                <button onClick={()=>handleClick(index, true)}>+</button>{cart.quantity} <button onClick={()=>handleClick(index, false)}>-</button>
                            </span>
                        </li>
                    ))       
                }
            </ul>
        </>
    )
}
