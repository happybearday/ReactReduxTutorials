import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux"


function HookCakeContainer(){
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>num of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default  HookCakeContainer