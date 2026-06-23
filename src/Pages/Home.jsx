import Header from "../assets/Header"
import Footer from "../assets/footer";
import { useState } from "react";
import { useEffect } from "react";
import BotaoWhatsApp from "../components/whatsapp";

export default function Home() {
  const images = [
    "/images/promo-1.png",
    "/images/promo-2.png",
    "/images/promo-3.png",

  ];
  const specs = [
    {
      icon: "/images/telefone.png",
      color: "bg-orange-main",
      label: "Peça pelo telefone!",
    },
    {
      icon: "/images/coracao.png",
      color: "bg-orange-ligh",
      label: "Todo mundo ama !",
    },
    {
      icon: "/images/escudo.png",
      color: "bg-orange-main",
      label: "Certificados de segurança",
    },
    {
      icon: "/images/home.png",
      color: "bg-orange-ligh",
      label: "Entrege na sua casa",
    },
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
       <div className="w-full flex justify-center  p-10 bg-orange-100 ">
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
       <div className="flex justify-center items-center w-full h-350 md:h-290 bg-orange-main px-6 py-12">
         <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
           <div className="max-w-xl">
             <h1 className="font-poppins font-bold text-xl md:text-2xl text-white mb-5">
               Nossa História
             </h1>
             <p className="text-white font-poppins text-sm md:text-base leading-6 md:leading-7 text-justify">
               Fundada com o objetivo de oferecer uma experiência gastronômica
               diferenciada, nossa pizzaria une tradição, qualidade e paixão
               pela culinária italiana. Desde o primeiro dia, buscamos criar
               receitas que valorizam ingredientes frescos, sabores autênticos e
               um atendimento que faz cada cliente se sentir especial. Ao longo
               dos anos, conquistamos a confiança de centenas de famílias,
               tornando-nos referência quando o assunto é pizza de qualidade.
               <br />
               <br />
               Nossa missão vai muito além de servir refeições. Queremos
               proporcionar momentos inesquecíveis entre amigos, familiares e
               pessoas que apreciam uma boa comida. Cada pizza é preparada com
               dedicação, respeitando processos que garantem uma massa leve, um
               recheio equilibrado e um sabor marcante. Aqui, cada detalhe
               importa, desde a escolha dos ingredientes até a apresentação
               final do pedido.
             </p>
           </div>
           <div className="flex justify-center">
             <img
               className="w-full max-w-sm md:max-w-md rounded-4xl shadow-2xl object-cover"
               src="/images/loja.png"
               alt=""
             />
           </div>
           <div className="max-w-xl md:col-span-2">
             <h1 className="font-poppins font-bold text-xl md:text-2xl text-white mb-5">
               Ingredientes Selecionados
             </h1>
             <p className="text-white font-poppins text-sm md:text-base leading-6 md:leading-7 text-justify">
               A qualidade de uma pizza começa muito antes de ela chegar à sua
               mesa. Por isso, trabalhamos com ingredientes cuidadosamente
               selecionados, escolhendo fornecedores que compartilham do nosso
               compromisso com a excelência. Utilizamos molhos preparados com
               tomates de alta qualidade, queijos saborosos, vegetais frescos e
               carnes selecionadas para garantir uma experiência gastronômica
               superior. <br /> <br /> Nosso compromisso é oferecer produtos que
               mantenham o sabor, a textura e o aroma característicos de uma
               pizza artesanal. Cada ingrediente é armazenado e preparado
               seguindo rigorosos padrões de qualidade, garantindo segurança
               alimentar e preservando o sabor original de cada receita.
             </p>
           </div>
         </div>
       </div>

       <div className=" w-full h-200 bg-amber-100 text-center p-10 shadow-[inset_0_8px_18px_rgba(0,0,0,0.25)]"></div>
       <div className=" w-full h-100 bg-amber-400 ">
         <div className="grid grid-cols-4 gap-4 mx-auto max-w-3xl p-10 pt-25">
           {specs.map((spec, index) => (
             <div
               key={index}
               className="flex flex-col items-center gap-3 text-center"
             >
               <div
                 id="highlights"
                 className={`${spec.color} shadow-lg  transition duration-150 ease-in-out hover:bg-amber-200 rounded-full w-16 h-16 p-5`}
               >
                 <img src={`${spec.icon}`} className="w-full h-full" alt="" />
               </div>
               <div className="max-w-29">
                 <p className="font-poppins font-semibold text-white">
                   {spec.label}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </div>
       <BotaoWhatsApp />
       <Footer />
     </section>
   );
}
