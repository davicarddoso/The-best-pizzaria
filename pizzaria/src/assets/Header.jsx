import { Link } from "react-router-dom"


function Header() {
   return (
     <section className=" h-25 w-full relative">
       <section className="bg-amber-100 p-2.5">
         <Link to="/" className="flex justify-center">
           <img
             className="h-full w-50 object-contain "
             src="/images/icon .png"
             alt="Pizzaria"
           />
         </Link>
       </section>
       <div className="h-1 w-full bg-orange-main"></div>
     </section>
   );
}

export default Header
