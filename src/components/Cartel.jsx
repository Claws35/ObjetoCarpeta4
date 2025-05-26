function Cartel({ titulo, descripcion, imagen }) {
  return (
    <div className="flex flex-col items-center group relative overflow-visible">
      <div className="relative bg-yellow-500 text-black p-6 px-5 shadow-lg w-64 h-40 flex items-center justify-center overflow-hidden">
        <img
          src={imagen}
          alt={titulo}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-[100%] mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-yellow-400 rounded-lg shadow-lg p-4">
        <h3 className="text-xl font-semibold">{titulo}</h3>
        <p>{descripcion}</p>
      </div>

      <div className="w-2 h-24 bg-yellow-700"></div>
    </div>
  );
}

export default Cartel;
