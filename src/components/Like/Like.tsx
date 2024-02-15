import { useState } from "react";
import "./Like.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";



interface LikeProps {
    onClick: () => void;
}


export default function Like({onClick}: LikeProps) {
    const [is_like_button_active, setLikeButtonActive] = useState(false);

    const toggleActiveButton = () =>{
        setLikeButtonActive(!is_like_button_active);
        onClick();
    }

    return (
        <div>
            {is_like_button_active ?
                (

                    <span className="icon" onClick={toggleActiveButton}>
                        <FaHeart style={{color:"#E96876"}}/>
                    </span>
                )
                :
                (
                    <span className="icon" onClick={toggleActiveButton}>
                        <FaRegHeart/>
                    </span>
                )                
            }
        </div>
    )
}
