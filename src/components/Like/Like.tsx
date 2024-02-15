import { useState } from "react";
import "./Like.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";



interface LikeProps {
    onClick: () => void;
}


export default function Like({onClick}: LikeProps) {
    const [is_like_button_active, setLikeButtonActive] = useState(false);


    return (
        <div onClick={onClick}>
            {is_like_button_active ?
                (
                    <span className="icon" onClick={()=>setLikeButtonActive(false)}>
                        <FaRegHeart/>
                    </span>
                )
                :
                (
                    <span className="icon" onClick={()=>setLikeButtonActive(true)}>
                        <FaHeart style={{color:"#E96876"}}/>
                    </span>
                )
                  
            }
        </div>
    )
}
