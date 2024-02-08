import React, { ReactNode } from 'react';

interface Props{
    children: ReactNode;
    setAlertVisible: (is_alert_visible: boolean)=>void;
}

export default function Alert({children, setAlertVisible}: Props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={()=>setAlertVisible(false)}></button>
    </div>
  )
}
