import Props2 from "./Props2";

export default function Props1(){

    const products = [

        {
            id:1,
            name: "Table",
            price: 100,
            discount: '10%'
        },
        {
            id:2,
            name: "TV",
            price: 150,
            discount: '18%'
        },
        {
            id:3,
            name: "Chair",
            price: 70,
            discount: '5%'
        },
        {
            id:4,
            name: "Laptop",
            price: 500,
            discount: '8%'
        }

    ]

    return(

        <>
            {products.map((prod, index)=>
                <Props2 key={index} name={prod.name} price={prod.price} discount={prod.discount}/>
            )}
            
        </>

    );
}