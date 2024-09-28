import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserContext from "lib/UserContext";
import { supabase } from "lib/Store";
import { jwtDecode } from "jwt-decode";
import Heading from "~/components/Heading";

const Login = () => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const router = useRouter();
  useEffect(() => {
    function saveSession(
      /** @type {Awaited<ReturnType<typeof supabase.auth.getSession>>['data']['session']} */
      session,
    ) {
      const currentUser = session?.user;
      if (session) {
        const jwt = jwtDecode(session.access_token);
        currentUser.appRole = jwt.user_role;
      }
      setUser(currentUser ?? null);
      setUserLoaded(!!currentUser);
      if (currentUser) {
        router.push("./", "/");
      }
    }

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => saveSession(session));

    const { subscription: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        saveSession(session);
      },
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (type, username, password) => {
    try {
      const {
        error,
        data: { user },
      } =
        type === "LOGIN"
          ? await supabase.auth.signInWithPassword({
              email: username,
              password,
            })
          : await supabase.auth.signUp({ email: username, password });
      // If the user doesn't exist here and an error hasn't been raised yet,
      // that must mean that a confirmation email has been sent.
      // NOTE: Confirming your email address is required by default.
      if (error) {
        alert("Error with auth: " + error.message);
      } else if (!user)
        alert("Signup successful, confirmation mail should be sent soon!");
    } catch (error) {
      console.log("error", error);
      alert(error.error_description || error);
    }
  };

  return (
    <>
      <Heading navLinks={false} />
      <div className="rounded-md lg:w-[512px] md:w-96 sm:w-80 login-container absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="relative overflow-auto border-teal p-8 border-t-12 mb-6 rounded-lg900 bg-transparent">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">
              Email
            </label>
            <input
              type="email"
              className="block bg-[#e59cff] relative w-full focus:outline-none outline-none border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Enter your email"
              value={password}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">
              Password
            </label>
            <input
              type="password"
              className="block relative bg-[#e59cff] w-full focus:outline-none outline-none border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleLogin("LOGIN", username, password);
              }}
              href={"/application"}
              className="border bg-[#e59cff] text-indigo-700 py-2 px-4 rounded w-full text-center transition duration-150 hover:brightness-90 hover:text-white"
            >
              Login
            </a>
            <a
              href="/signup"
              onclick="void(0)"
              class="relative hover:text-decoration:underline"
            >
              <span class="hero-subtitle-text">
                Your simple, fun, and sleek communication companion!{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
