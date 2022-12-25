import BannerHeader from "@/component/BannerHeader/BannerHeader";
import Layout from "../src/layout";

export default function phyloshophy() {
  return (
    <Layout pageTitle="Philosophy">
      <BannerHeader title="philosophy" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 place-items-center">
        <div>
          <img
            src="/assets/filosopi/filosopi.jpg"
            loading="lazy"
            className="h-full"
          />
        </div>
        <div className="p-10">
          <h2 className="text-sm ">
            With the potential of Indonesia&lsquo;s natural wealth, we present
            our pride specialty coffee with the best characteristics, aroma &
            taste. Looking for sources with ethics and developing specific
            process that we establish with farmers and processors in each
            region. We are proud to present Indonesian coffee to you.
          </h2>
        </div>
      </div>
    </Layout>
  );
}
