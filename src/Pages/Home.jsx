import Header from "../assets/Header"
import { useState } from "react";
import { useEffect } from "react";
import BotaoWhatsApp from "../components/whatsapp";

export default function Home() {
  const images = [
    "/images/promo-1.png",
    "/images/promo-2.png",
    "/images/promo-3.png",

  ];
  const [index, setIndex] = useState(0);
    useEffect(() => {

      const timer = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 9000);

    return () => clearInterval(timer);

    }, [images.length]);
  

   return (
     <section className="">
       <Header />
       <div className="w-full flex justify-center  p-10 bg-orange-100">
         <div className="grid grid-cols-1 gap-3">
           <img
             className=" w-150 rounded-3xl shadow-2xl object-contain  transition-opacity duration-500 ease-in-out "
             src={images[index]}
             alt="Pizza"
           />
           <section className="w-full h-15 flex  justify-around items-center ">
             <button
               onClick={() =>
                 setIndex(index === 0 ? images.length - 1 : index - 1)
               }
               className=" w-10 h-10 p-2 rounded-4xl  bg-orange-main object-cover"
             >
               <img src="/images/angulo-esquerdo.svg" alt="" />
             </button>
             <button
               onClick={() => setIndex((index + 1) % images.length)}
               className=" w-10 h-10 p-2 rounded-4xl bg-orange-main object-contain"
             >
               <img src="/images/angulo-direito.svg" alt="" />
             </button>
           </section>
         </div>
       </div>
      <div className=" w-full h-100 bg-orange-main">
               <h1>OI</h1>
      </div>
               <BotaoWhatsApp />
     </section>
   );
}
