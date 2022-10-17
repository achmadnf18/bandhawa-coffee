import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const Auth = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      await axios.post("http://localhost:3001/login", data);
      localStorage.setItem("email", data.email);

      // console.log(data);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
    // await LoginUser(data);
  };

  return (
    <div className="container mx-auto  ">
      <div className=" flex items-center justify-center py-56">
        <div className="rounded-md shadow p-5">
          <form onSubmit={Auth}>
            <div className="p-4">
              <h5 className="text-lg">Masuk</h5>
            </div>
            <label
              // htmlFor="street-address"
              className="pl-4 block text-xs font-medium text-gray-500"
            >
              Alamat Email
            </label>
            <input
              type="email"
              placeholder="Input Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 px-4 mb-2 text-xs text-gray-300 placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#4283F4] focus:border-[#4283F4] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
            />
            <label
              // htmlFor="street-address"
              className="pl-4 block text-xs font-medium text-tertiary"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Input Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 px-4 mb-2 text-xs text-tertiary placeholder-secondary border focus:shadow-outline mt-1 focus:ring-[#4283F4] focus:border-[#4283F4] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
            />
            <div className="py-4">
              <button className="text-medium text-sm">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
