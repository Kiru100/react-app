

import { MouseEvent } from "react";

function ListGroup(){

    let items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "London",
        "Paris"
    ];

    /* Event handler */
    const handleClick = (event : MouseEvent) => console.log(event);

   

    return (
        <>
            <h1>List</h1>
            { items.length }
            <ul className="list-group">
                {Boolean(!items.length) && <p>No item found</p>}
                {items.map((item, index)=> 
                    <li 
                        className="list-group-item" 
                        key={index + item} 
                        style={{cursor:"pointer"}}
                        onClick={handleClick}
                    >
                            {item}                        
                    </li>
                )}
            </ul>
        </>
    )
}

export default ListGroup;