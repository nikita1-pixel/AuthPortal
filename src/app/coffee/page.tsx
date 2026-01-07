 export interface Coffee {
     title: any;
        id: number;
        name: string;
        description: string;
        price: number;
       image: string; // Path to the image
       isBestseller: boolean;
       customizations: {
         size: {
           type: 'radio';
           options: { label: string; price: number }[];
         };
         milk: {
           type: 'radio';
           options: { label: string; price: number }[];
         };
         sugar: {
           type: 'select';
           options: { label: string; price: number }[];
         };
       };
     }

const CoffeePage = async () =>{
    let coffees : Coffee[] = [];
    let error : string | null = null;
    try {
        const res = await fetch('http://localhost:4000/coffees', {cache: 'no-store'});
        if (!res.ok) {
            throw new Error(`HTTP erroe! status: ${res.status} ` );
        }
        coffees = await res.json();
    } catch (err:any) {
        console.error('Failed to fetch coffees:', err);
        error = err.message;
    }
    
    const bestsellers = coffees.filter(coffee => coffee.isBestseller);
    const others = coffees.filter(coffee => !coffee.isBestseller);

    if (error) {
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold mb-4 text-red-600">Error Loading Coffees</h1>
            <p className="text-red-500">{error}</p>
        </main>
    }
    return (
        <main className="bg-white w-full py-12">
            <div className="container mx-auto p-4 bg-amber-50 py-12"> 
                <header className="text-center mb-12">
               <h1 className="text-5xl font-extrabold text-amber-900 dark:text-amber-400 font-serif">
                Our Coffee Selection</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Handcrafted with passion, from our roastery to your cup.</p>
                </header>
                <section className="mb-16"> 
                <h2 className="text-3xl font-bold text-center text-amber-800 mb-8"> Our Bestsellers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center text-black mb-16">
                    {bestsellers.length > 0 ? (
                        bestsellers.map((coffee) => (
                            <div key={coffee.id} className="card  w-96 shadow-md border border-amber-400 h-full flex flex-col">
                                <p>{coffee.name} (Bestsellers)</p>
                            </div>
                    ))
                ) : (
                        <p className="text-center col-span-full">No bestsellers available</p>
                    )} 
                </div>
                </section> 
                <section></section>             
                <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Full Menu</h2>
                <div className="">
                    {bestsellers.length > 0 ? (
                        bestsellers.map((coffee) => (
                            <div key={coffee.id} className="card  w-96 shadow-md border border-amber-400 h-full flex flex-col">
                                <p>{coffee.name} (Bestsellers)</p>
                            </div>
                    ))
                ) : (
                        <p className="text-center col-span-full">No bestsellers available</p>
                    )}
                </div>
            </div>
        </main>
    );
}
export default CoffeePage;