import React, { useState } from "react";
const LikeButtion: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    return (
        <>
        <button onClick={() => {setLike(like + 1)}}>
            {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            { on ? 'ON' : 'OFF' }
        </button>
        </>
    )
}

export default LikeButtion;
