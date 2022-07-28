 import React from "react";

interface IHelloProps {
    message?: string;
}

// const Hello: React.FunctionComponent<IHelloProps> = ( props ) => {
//     return <h2>{ props.message }</h2>
// }
// 类型别名 FC
 const Hello: React.FC<IHelloProps> = ( props ) => {
     return <h2>{ props.message }</h2>
 }
Hello.defaultProps = {
    message: "Hello World"
}

export default Hello;
