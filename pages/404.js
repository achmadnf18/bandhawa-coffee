import { useEffect } from "react";
import { useRouter } from "next/router";
export default function errorPages() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);
  return (
    <section className="container mx-auto">
      <center>
        <h1 className="mt-20 font-medium text-xl">- Page Not Found -</h1>
      </center>
    </section>
  );
}
