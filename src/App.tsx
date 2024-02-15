import { useState } from "react"
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
import { BsCalendar2MinusFill } from "react-icons/bs";
import Like from "./components/Like/Like";


export default function App() {
    const [is_alert_visible, setAlertVisible] = useState(true);
    const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
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
        </div>
    )
}
