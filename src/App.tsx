import { useState } from "react"
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
    const [is_alert_visible, setAlertVisible] = useState(true);

    return (
        <div>
            {
                Boolean(is_alert_visible) && (<Alert setAlertVisible={setAlertVisible}>My Alert</Alert>)
            }
            <Button color="primary" button_content="Primary" onClick={()=>setAlertVisible(true)}/>
        </div>
    )
}
