import { useState } from "react"
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";

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

            <div><ListGroup items={items} heading="Cities"onSelectedItem={onSelectedItem} /></div>
        </div>
    )
}
