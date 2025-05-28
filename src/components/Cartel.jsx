function Cartel({ titulo, descripcion, imagen, link }) {
  return (
    <div className="flex flex-col items-center group relative overflow-visible mt-40">
      <div className="absolute bottom-full mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 bg-[#f1dfbd]  p-4 w-64">
        <h3 className="text-xl font-semibold">{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      <a href={link} className="relative z-10">
        <div className="relative bg-yellow-500 text-black p-6 px-5 shadow-lg w-64 h-40 flex items-center justify-center overflow-hidden">
          <img
            src={imagen}
            alt={titulo}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </a>
      {/* Línea amarilla - ahora está al final */}
      <div className="w-2 h-12 bg-yellow-700"></div>
    </div>
  );
}
export default Cartel;
