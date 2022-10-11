import { useState } from "react";
import Layout from "../src/layout";

export default function phyloshophy() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);

  return (
    <Layout pageTitle=" Phyloshophy">
      <section>
        <div className="bg-fixed bg-center bg-cover phyloshophy-img-first">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
              className=" py-52 "
            >
              {!isHovering && (
                <h1
                  data-aos="fade-up"
                  className="lg:text-2xl text-xl sm:mx-0 mx-10 uppercase text-white flex items-center justify-center align-middle  tracking-[0.5rem]"
                >
                  perfect shape & size
                </h1>
              )}

              {isHovering && (
                <div
                  data-aos="zoom-in"
                  className="container mx-auto ease-in-out duration-100"
                >
                  <h1 className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]">
                    perfect shape & size
                  </h1>
                  <h3 className="text-lg text-white align-middle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Local Farmer */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-center bg-cover phyloshophy-img-second">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div
              onMouseOver={() => setIsHovering2(true)}
              onMouseOut={() => setIsHovering2(false)}
              className=" py-52 "
            >
              {!isHovering2 && (
                <h1
                  data-aos="fade-up"
                  className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
                >
                  Local Farmer
                </h1>
              )}

              {isHovering2 && (
                <div
                  data-aos="zoom-in"
                  className="container mx-auto ease-in-out duration-100"
                >
                  <h1 className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]">
                    Local Farmer
                  </h1>
                  <h3 className="text-lg text-white align-middle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Washed */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat phyloshophy-img-third">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div
              onMouseOver={() => setIsHovering3(true)}
              onMouseOut={() => setIsHovering3(false)}
              className=" py-52 "
            >
              {!isHovering3 && (
                <h1
                  data-aos="fade-up"
                  className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
                >
                  washed
                </h1>
              )}

              {isHovering3 && (
                <div
                  data-aos="zoom-in"
                  className="container mx-auto ease-in-out duration-100"
                >
                  <h1 className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]">
                    washed
                  </h1>
                  <h3 className="text-lg text-white align-middle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Natural Drying */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat phyloshophy-img-fourth">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div
              onMouseOver={() => setIsHovering4(true)}
              onMouseOut={() => setIsHovering4(false)}
              className=" py-52 "
            >
              {!isHovering4 && (
                <h1
                  data-aos="fade-up"
                  className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
                >
                  Natural Drying
                </h1>
              )}

              {isHovering4 && (
                <div
                  data-aos="zoom-in"
                  className="container mx-auto ease-in-out duration-100"
                >
                  <h1 className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]">
                    natural drying
                  </h1>
                  <h3 className="text-lg text-white align-middle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Good Taste */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat phyloshophy-img-fifth">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div
              onMouseOver={() => setIsHovering5(true)}
              onMouseOut={() => setIsHovering5(false)}
              className=" py-52 "
            >
              {!isHovering5 && (
                <h1
                  data-aos="fade-up"
                  className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
                >
                  good taste
                </h1>
              )}

              {isHovering5 && (
                <div
                  data-aos="zoom-in"
                  className="container mx-auto ease-in-out duration-100"
                >
                  <h1 className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]">
                    good taste
                  </h1>
                  <h3 className="text-lg text-white align-middle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
