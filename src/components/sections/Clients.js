import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>Courses I have done</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            
              {/* <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              /> */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS116S3368017010175337">
                      <img className="imgFlip" src="assets/blog/cca.jpg" alt="Client"/>
                    </a>
                  </div>
                  <div className="flip-card-back">
                    <a className="flip-back-link" href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS116S3368017010175337">
                      <section>
                        <p className="flipP"><b>Issuer:</b> NPTEL</p>
                        <p className="flipP"><b>Issued Date:</b> Nov 2022</p>
                      </section>
                    </a>
                  </div>
                </div>
              </div> 
            
            <div>
              <img
                src="assets/logos/photodune-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/3docean-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/themeforest-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/activeden-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/audiojungle-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/graphicriver-dark-background.png"
                alt="client"
              />
            </div>
            <div>
              <img
                src="assets/logos/codecanyon-dark-background.png"
                alt="client"
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Clients;
