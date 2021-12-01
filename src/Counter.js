import {useState, useContext} from "react";
import { themecontext } from "./App";
import './Counter.css';

function Counter(props){
    const [count, setcount] = useState(0);
    const style = useContext(themecontext);

    const plushandler = () => { setcount(count + 1)}
    const minushandler = () => { setcount(count - 1)}

    return (
        <div >
            <button style={style} onClick={plushandler}>+</button>
            <span>{count}</span>
            <button style={style} onClick={minushandler}>-</button>
        </div>
    )
}

export default Counter;