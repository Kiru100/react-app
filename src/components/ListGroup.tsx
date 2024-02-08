

import { MouseEvent, useState } from "react";
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectedItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectedItem}: ListGroupProps){
    const [ selected_index, setSelectIndex] = useState(-1);
    
    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {Boolean(!items.length) && <p>No item found</p>}
                {items.map((item, index)=> 
                    <li 
                        className={`list-group-item ${Boolean(selected_index === index) && "active"}`} 
                        key={index + item} 
                        style={{cursor:"pointer"}}
                        onClick={()=>{
                            setSelectIndex(index);
                            onSelectedItem(item);
                        } }
                    >
                            {item}                        
                    </li>
                )}
            </ul>
        </>
    )
}

export default ListGroup;