import './ListGroup.css';
import styled from 'styled-components';

import { MouseEvent, useState } from "react";

const List = styled.ul`
    list-style: none;
    padding: 0;
`
const ListItem = styled.li`
    padding: 5px 0;
`

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
            <List className="list-group">
                {Boolean(!items.length) && <p>No item found</p>}
                {items.map((item, index)=> 
                    <ListItem 
                        className={`list-group-item ${Boolean(selected_index === index) && "active"}`} 
                        key={index + item} 
                        style={{cursor:"pointer"}}
                        onClick={()=>{
                            setSelectIndex(index);
                            onSelectedItem(item);
                        } }
                    >
                            {item}                        
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default ListGroup;