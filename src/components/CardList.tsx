import React from "react";
 
 // Placeholder data for our cards
 const coffeeData = [
   {
     id: 1,
     title: "Espresso Con Panna",
     description: "A rich shot of espresso topped with a dollop of whipped cream.",
     image: "/images/EspressoconPanna.jpg",
      },
      {
        id: 2,
        title: "Caramel Macchiato",
        description: "Steamed milk with vanilla, marked with espresso and caramel.",
        image: "/images/CaramelMacchiato.jpg",
      },
      {
        id: 3,
        title: "Iced Cold Brew",
        description: "Slow-steeped, super-smooth cold brew, served over ice.",
        image: "/images/ColdBrew.jpg",
      },
      {
        id: 4,
         title: "Classic Tiramisu",
         description: "A coffee-flavoured Italian dessert. A true classic.",
         image: "/images/Tiramisu.jpg",
      },
      {
        id: 5,
        title: "Cup of Coffee",
        description: "A simple, elegant cup of our finest house blend coffee.",
        image: "/images/CupOfCoffee.jpg",
      },
      {
        id: 6,
        title: "Affogato",
        description: "A scoop of vanilla ice cream drowned in hot espresso.",
        image: "/images/Affogato.jpg",
      },
 ];
    
    const CardList = () => {
      return (
        <div className="bg-white w-full py-12">
        <div className="container mx-auto p-4  bg-amber-50 py-12">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Our Suggested Items</h2>
   
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center text-black">
            {coffeeData.map((coffee) => (      
              <div key={coffee.id} className="card  w-96 shadow-md border border-amber-400 h-full fle
      flex-col">  
                <figure className="h-48 w-full overflow- text-black">        
                  <img
                    src={coffee.image}
                    alt={coffee.title}
                    className="w-full h-full object-cover" 
                  />
                </figure>
                <div className="card-body flex-grow justify-between"> 
                  <h2 className="card-title text-xl">{coffee.title}</h2> 
                  <p className="text-sm flex-grow">{coffee.description}</p> 

                  <div className="card-actions justify-end mt-4">
                   <button className="btn btn-primary bg-amber-600 border-none text-white hover:bg-amber-700">
                    Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
   
          </div>
     </div>
</div>
      );
    };
   
    export default CardList;