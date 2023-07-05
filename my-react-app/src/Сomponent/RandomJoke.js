import { useState, useEffect } from "react";
import getChuck from "./fetch";
import Loader from "./Loader/Loader";
import { Button } from "./CardStyled";
import { Blockquote } from "./CardStyled";


function RandomJoke() {
    const [resourseType, setResourseType] = useState(1);
    const [values, setValues] = useState("");
   
    useEffect(() => {
        getChuck().then(g => setValues(g.value)).catch((error) => console.log(error));
    }, [resourseType])
    console.log(values);
    return (<>
       { values==="" ? <Loader/> :<Blockquote>{JSON.stringify(values)}</Blockquote>}
        <Button onClick={()=>{setResourseType(resourseType+1)}}>Load more</Button >
    </>)
    }

export default RandomJoke