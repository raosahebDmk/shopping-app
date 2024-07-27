
import Cards from "./Cards";


export default function Home()
{

    const mobiles = [
        {
          "id" : 1,
          "name":"Iphone",
          "model":"15",
          "price":25000,
          "image":"1.jpg"
        },
        {
          "id" : 2,
          "name":"Iphone",
          "model":"15 Plus",
          "price":6000,
          "image":"2.jpg"
        },
        {
          "id" : 3,
          "name":"Samsung",
          "model":"S24",
          "price":4500,
          "image":"s1.jpg"
        },
        {
          "id" : 4,
          "name":"Samsung",
          "model":"S24 Plus",
          "price":6500,
          "image":"s2.jpg"
        }
    
      ];

      
    return(
        <>
            
            <Cards brand={mobiles}></Cards>
        </>
    );
}

