import React from "react";

export default function BotaoWhatsApp() {
  const numeroTelefone = "5538991192038"; // Substitua pelo seu número com DDD e código do país
  const mensagem = "Olá! Gostaria de ter ums site como esse!"; // Mensagem inicial

  const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className="fixed z-50">
        <div className="absolute w-15 h-40right-0">
            <img src="/images/balao-de-fala.png" className="bg-contain" alt="" />
        </div>
        <a className="absolute flex justify-center bottom-6 items-center right-full z- animate-bounce w-15 h-15 rounded-full bg-green-700"
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/images/whatsapp.png" className="w-10 h-10" alt="" />
    </a>
    </div>
    
  );
}
