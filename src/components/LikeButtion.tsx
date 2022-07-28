import React, { useState } from "react";
const LikeButtion: React.FC = () => {
    const [like, setLike] = useState(0)
    return (
        <button onClick={() => {setLike(like + 1)}}>
            {like} 👍
        </button>
    )
}

export default LikeButtion;
