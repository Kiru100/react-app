interface Props{
    color?: 'primary' | 'secondary' | 'danger';
    button_content: string;
    onClick: ()=>void;
}

function Button({color = "primary", button_content, onClick}:Props) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>{button_content}</button>
  )
}

export default Button