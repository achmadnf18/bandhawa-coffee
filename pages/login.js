import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmitData = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      await axios.post("http://localhost:3001/login", data);
      router.push("/dashboard");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    // await LoginUser(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmitData}>
        <input
          type="email"
          placeholder="Input Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Input Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
