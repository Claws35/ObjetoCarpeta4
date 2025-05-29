import "./App.css";
import Cartel from "./components/Cartel";
import carteles from "./data/carteles";
import imagenPj from "./img/imagenPj.png";
import imagenFantasma from "./img/imagenFantasma.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#f6f2e6] overflow-hidden relative ">
      <h1 className="text-6xl font-semibold mb-8 z-10 font-[new-order]">
        Mi camino creativo
      </h1>

      <div className="w-full h-[60vh] relative mt-10 z-0">
        {/* Swiper container */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={50}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full h-full"
        >
          {/* Primera diapositiva especial */}
          <SwiperSlide className="!w-[300px] !h-[380px] relative">
            <img
              src={imagenPj}
              alt="Imagen inicial"
              className="h-[180px] object-cover absolute bottom-[10px] right-[42%] z-20 "
            />
            <div className="absolute bottom-[10px] left-79 transform -translate-x-1/2 w-[120%] h-4 bg-[#f1ae3f] "></div>
          </SwiperSlide>

          {/* Map de carteles */}
          {carteles.map((cartel) => (
            <SwiperSlide
              key={cartel.id}
              className="!w-[300px] !h-[380px] relative "
            >
              <Cartel
                titulo={cartel.titulo}
                descripcion={cartel.descripcion}
                imagen={cartel.imagen}
                link={cartel.link}
              />
              <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[120%] h-4 bg-[#f1ae3f] "></div>
            </SwiperSlide>
          ))}

          {/* Última diapositiva especial */}
          <SwiperSlide className="!w-[300px] !h-[380px] relative">
            <h3 className=" absolute text-2xl bottom-7">
              Aqui es donde comenzó...
            </h3>
            <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[120%] h-4 bg-[#f1ae3f] "></div>
          </SwiperSlide>
          <SwiperSlide className="!w-[300px] !h-[380px] relative"></SwiperSlide>
          <SwiperSlide className="!w-[300px] !h-[380px] relative"></SwiperSlide>
          <SwiperSlide className="!w-[300px] !h-[380px] relative">
            <img
              className=" absolute bottom-7 right-30 h-40"
              src={imagenFantasma}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
