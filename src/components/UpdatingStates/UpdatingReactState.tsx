import React, { useState } from 'react'

export default function UpdatingReactState() {
    const [game, setGame] = useState({
        id:1,
        player:{
            name:"John"
        }
    })

    const handleClick = () =>{
        setGame({
            ...game, 
                player: {...game.player, name: "newname"
            },
        })
    }

    return (
        <>
            <div>{game.player.name}</div>
            <button onClick={handleClick}>Click to change ^</button>
        </>
    )
}
