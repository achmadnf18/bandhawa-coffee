import { useRouter } from "next/router";
import DetailProduct from "../../../src/data/productdetail.json";
import HeroText from "../../../src/component/Hero/HeroText";
import Layout from "../../../src/layout";
export default function ProductDetails() {
  const router = useRouter();
  const data = router.query;

  return (
    <Layout pageTitle={data.slug}>
      <div
        className="h-[400px] flex items-center justify-center bg-fixed bg-center bg-cover custom-img"
        id="about"
      >
        <HeroText />
      </div>
      {/* Detail Produk */}
      <section className="">
        <div className="container mx-auto md:px-4 px-10 pt-20 pb-5">
          {/* Detail Name */}
          <h2 className="lg:text-4xl sm:text-2xl text-xl font-semibold text-center">
            {DetailProduct.name}
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-6 ">
            <div>
              {/* Location */}
              <div className="my-8">
                <h4 className="font-medium text-xl">Location :</h4>
                <h4 className="text-lg">{DetailProduct.description}</h4>
              </div>
              <div className="my-8">
                <h4 className="font-medium text-xl">Type :</h4>
                <h4 className="text-lg">{DetailProduct.type}</h4>
              </div>
              <div className="my-8">
                <h4 className="font-medium text-xl">Process :</h4>
                <h4 className="text-lg">{DetailProduct.process}</h4>
              </div>
              <div className="my-8">
                <h4 className="font-medium text-xl">Elevation :</h4>
                <h4 className="text-lg">{DetailProduct.elevation}</h4>
              </div>
              <div className="my-8">
                <h4 className="font-medium text-xl">Variesties :</h4>
                <h4 className="text-lg">{DetailProduct.varieties}</h4>
              </div>
              <div className="my-8">
                <h4 className="font-medium text-xl">Taste :</h4>
                <h4 className="text-lg">{DetailProduct.taste}</h4>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <img src="/assets/image-product.JPG" alt="product.jpg" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
