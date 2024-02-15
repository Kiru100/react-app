import { useState } from "react"
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import { BsCalendar2MinusFill } from "react-icons/bs";
import Like from "./components/Like/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import UpdatingReactState from "./components/UpdatingStates/UpdatingReactState";
import UpdatingPizzaState from "./components/UpdatingStates/UpdatingPizzaState";
import UpdatingCartState from "./components/UpdatingStates/UpdatingCartState";


export default function App() {
    const [is_alert_visible, setAlertVisible] = useState(true);
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    const [cart_items, setCartItems] = useState(["Product 1", "Product 2"])

    let count = 0;
    const onSelectedItem = () =>{
        
    }
    return (
        <div>
            {/* {
                Boolean(is_alert_visible) && (<Alert onClose={()=>setAlertVisible(false)}>My Alert</Alert>)
            }
            <Button color="primary" button_content="Primary" onClick={()=>setAlertVisible(true)}/> */}
            <BsCalendar2MinusFill color="red" />
            <Button color="primary" button_content="Primary" onClick={()=>setAlertVisible(true)}/> 
            <div><ListGroup items={items} heading="Cities"onSelectedItem={onSelectedItem} /></div>

            <Like onClick={()=>console.log("clicked")}/>

            <NavBar cartItemsCount={cart_items.length}></NavBar>
            <Cart cartItems={cart_items} onClear={()=>setCartItems([])}></Cart>

            <UpdatingReactState></UpdatingReactState>
            <UpdatingPizzaState></UpdatingPizzaState>
            <UpdatingCartState></UpdatingCartState>
        </div>
    )
}
