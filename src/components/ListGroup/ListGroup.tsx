import './ListGroup.css';
import styled from 'styled-components';

import { MouseEvent, useState } from "react";

const List = styled.ul`
    list-style: none;
    padding: 0;
`
const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? "blue" : "none"};
    color: ${props => props.active ? "white" : "black"}
`

interface ListItemProps{
    active: boolean;
}

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectedItem: (item:string) => void;
}

function ListGroup({items, heading, onSelectedItem}: ListGroupProps){
    const [ selected_index, setSelectIndex] = useState(0);
    
    return (
        <>
            <h1>{heading}</h1>
            <List className="list-group" style={{backgroundColor:'yellow'}}>
                {Boolean(!items.length) && <p>No item found</p>}
                {items.map((item, index)=> 
                    <ListItem 
                        active={selected_index === index}
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