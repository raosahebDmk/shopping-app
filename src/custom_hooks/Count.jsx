import useCounter from "./useCounter"

export default function Count()
{
     const [count, Increement, Decreement] = useCounter();
    
    return(
        <>
        Count.. {count}
        <br></br>
        <button onClick={Increement}>Increement</button>
        <button onClick={Decreement}>Decreement</button>
        </>
    )
}