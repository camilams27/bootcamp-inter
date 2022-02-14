import { useEffect, useState } from "react";
import './Counter.css'

export default function Counter() {
    const [quantity, setQuantity] = useState(1);
    const [button, setButton] = useState('menosAct');

    function down(){
        if(quantity > 0){
            setQuantity(quantity-1)
        }
        if(quantity <= 1){
            setButton('menosDisb')
        }
    }

    function up(){
        setQuantity(quantity+1)
        setButton('menosAct')
    }

    useEffect(()=>{
        alert('não há mais o que diminuir!')
    },[button])

    return(
        <div className="buttons">
            <button className={button} onClick={down}>-</button>
            <h1>{quantity
            }</h1>      
            <button id="mais" onClick={up}>+</button>
        </div>
    )
};