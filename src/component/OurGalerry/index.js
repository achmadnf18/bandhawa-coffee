import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function OurGalleryComp() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 120,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="container mx-auto pb-20">
      <div className=" py-14 ">
        <h3 className="text-center tracking-[0.5rem] font-medium text-2xl uppercase text-[#101B49]">
          Our Gallery
        </h3>
      </div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        infinite
        centerMode={false}
        className=""
        containerClass="container-with-dots p-2 "
        dotListClass=""
        draggable
        focusOnSelect={false}
        //infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
      >
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431128793.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431129026.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431129120.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431529947.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431530204.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431530268.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431530287.jpg"
          className="px-3 w-full h-60"
        />
        <img
          data-aos="fade-up"
          src="/assets/galerry/1661431530350.jpg"
          className="px-3 w-full h-60"
        />

        {/* <img
          data-aos="fade-up"
          src="/assets/gallery/1661431530204.jpg"
          className="px-3 w-full h-60"
        /> */}
      </Carousel>
    </div>
  );
}
