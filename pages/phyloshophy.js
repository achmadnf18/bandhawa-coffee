import Layout from "../src/layout";

export default function phyloshophy() {
  return (
    <Layout pageTitle=" Phyloshophy">
      <section>
        <div className="bg-fixed bg-center bg-cover phyloshophy-img-first">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div className=" py-52 ">
              <h1
                data-aos="fade-up"
                className="lg:text-2xl text-xl sm:mx-0 mx-10 uppercase text-white flex items-center justify-center align-middle  tracking-[0.5rem]"
              >
                perfect shape & size
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Local Farmer */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-center bg-cover phyloshophy-img-second">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div className=" py-52 ">
              <h1
                data-aos="fade-up"
                className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
              >
                Local Farmer
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Washed */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat phyloshophy-img-third">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div className=" py-52 ">
              <h1
                data-aos="fade-up"
                className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
              >
                washed
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Natural Drying */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat phyloshophy-img-fourth">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div className=" py-52 ">
              <h1
                data-aos="fade-up"
                className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
              >
                Natural Drying
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Good Taste */}
      <section>
        <div className=" flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat phyloshophy-img-fifth">
          <div className="bg-black/50 hover:bg-black/60 w-full">
            <div className=" py-52 ">
              <h1
                data-aos="fade-up"
                className="lg:text-2xl text-xl uppercase text-white flex items-center justify-center align-middle tracking-[0.5rem]"
              >
                good taste
              </h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
