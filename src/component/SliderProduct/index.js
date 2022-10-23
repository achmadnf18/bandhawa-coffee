// import Image from "next/image";
import { useProducts } from "@/api/service/useProducts";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from "../Loading";
export const BASE_API_IMAGE = process.env.api_image;

export default function SliderProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 120,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  const service = useProducts();
  const doFetch = service?.getListProduct();
  const getList = doFetch?.data?.data;
  return (
    <div className="mr-2 pt-6">
      <h2 className="md:text-4xl text-2xl uppercase font-bold text-center py-2">
        another arabica
      </h2>
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
        {doFetch?.isFetching == true ? (
          <Loading color="text-gray-200" />
        ) : (
          getList?.map((row, i) => {
            return (
              <div className="text-center cursor-pointer" key={i + 1}>
                <Link href={`/beans/${row?.id}/${row?.slug}`}>
                  <a>
                    <div className="flex items-center justify-center">
                      <div className="w-1/2 object-contain ">
                        <div>
                          <img
                            src={`${BASE_API_IMAGE}/${row?.image}`}
                            className="object-contain  w-[100px] h-[100px]"
                            // layout="fill"
                            // objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                    <h5 className="text-sm font-bold uppercase pt-3">
                      {row?.name}
                    </h5>
                    <p className="text-sm text-[#027879] leading-tight">
                      {row?.taste.length > 40
                        ? `${row?.taste.substring(0, 40)}...`
                        : row?.taste}
                    </p>
                  </a>
                </Link>
              </div>
            );
          })
        )}
      </Carousel>
    </div>
  );
}
