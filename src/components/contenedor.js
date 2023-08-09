import React, { useState } from 'react'

function Contenedor() {
  const [contenido, setContenido] = useState("Hola mi nombre es Julián soy estudiante del Codo a codo 2023, estoy realizando el curso de React, al mismo tiempo soy estudiante de la Tecnicatura en Desarrollo Web en la UNER en la que actualmente estoy cursando el segundo año.");

  const handleClick = (nuevoContenido) => {
    setContenido(nuevoContenido);
  };

  return (<>
    <div className="bg-slate-200 min-w-max p-10">
      <h1 className="flex align-middle justify-center">Julián Silveira Annoni</h1>
      <ol className="flex justify-around mt-6 mb-5">
        <li className="cursor-pointer hover:bg-orange-300" onClick={() => handleClick('https://github.com/juliansilveira')} >Github</li>
        <li className="cursor-pointer hover:bg-orange-300" onClick={() => handleClick('julian.silveira.annoni@gmail.com')}>Gmail</li>
        <li className="cursor-pointer hover:bg-orange-300"  onClick={() => handleClick('https://www.linkedin.com/in/julian-sa')}>Linkedin</li>
      </ol>
      <p>
        {contenido}
      </p>

    </div>
  </>)
}

export default Contenedor;