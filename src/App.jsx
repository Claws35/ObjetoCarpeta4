import "./App.css";
import Cartel from "./components/Cartel";
import carteles from "./data/carteles";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden relative">
      <h1 className="text-4xl font-bold mb-8 z-10">Mi camino creativo</h1>

      <div className="w-full h-[40vh] relative mt-10 z-0">
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
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full h-full"
        >
          {carteles.map((cartel) => (
            <SwiperSlide
              key={cartel.id}
              className="!w-[300px] !h-[250px] relative "
            >
              {/* Cartel */}
              <Cartel
                titulo={cartel.titulo}
                descripcion={cartel.descripcion}
                imagen={cartel.imagen}
              />

              {/* Línea naranja individual para cada cartel */}
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[120%] h-4 bg-[#f1ae3f] "></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
