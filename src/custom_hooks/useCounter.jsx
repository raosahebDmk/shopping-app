import { useState } from "react"

export default function useCounter(){

    const [count, setCount] = useState(0)

    function Increement()
    {
        setCount(count+1)
    }
    function Decreement()
    {
        setCount(count-1)
        
    }
    return [count, Increement, Decreement]

}