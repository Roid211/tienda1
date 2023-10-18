import { useState, useEffect } from "react";


import Card from "../Card";
import Button from "../Button";


const cards = [
{title:"PRODUCT #001",
description:"Lorem ipsum dolor ",
image:"/assets/gato1.jpg",
price: 100,
},
{title:"PRODUCT #002",
description:"Lorem ipsum dolor it",
image:"/assets/gato2.jpg",
price: 200,
},
{title:"PRODUCT #003",
description:"Lorem ipsum dolor",
image:"/assets/gato3.jpg",
price: 300,
},
]



const Catalogo = () => {

  const [cardData, setCardData] = useState([cards[0]]);
  const [total, setTotal ] = useState(cards[0].price);

  useEffect (() => {
    console.log("total price changed", total);
    }, [total]);                                                            

  return (
   <div className="flex min-h-screen flex-col items-center gap-[24px] ">
    <div className="flex flex-col gap-[24px] justify-between">
        {cardData.map((card, index) => (            
        <Card
            key={"card-" + index}
            id={index}
            title={card.title}
            description={card.description}
            image={card.image}
            price={card.price}
            onPress={(id) => {
              // set the new total price
            setTotal((t) => t - card.price);
              // set the new card data
            const tmpCardData = cardData;
            tmpCardData.splice(id, 1);
            setCardData([...tmpCardData]);
            }}
            
            /> 
        ))}
    </div>
      
    <div>
    <p>${total}</p>
    </div>

    <div className="justify-star flex ">
    <Button
    variant={"primary"}
    
    onPress={() => {
      const cardIndex = Math.floor(Math.random() * cards.length);
      // set the new card data
      setCardData([...cardData, cards[cardIndex]]);
        // set the nwe total price
        setTotal((t) => t + cards[cardIndex].price);
    }}>Agregar</Button>
    </div>
   </div>

   
  );
};

export default Catalogo;