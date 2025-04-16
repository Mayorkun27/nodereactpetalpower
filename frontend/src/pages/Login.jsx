import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import BgCarousel from "../components/carousel/BgCarousel";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useUserUpdate } from "../hooks/UserContext";

const api = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const setSessionData = useUserUpdate();

  const navigate = useNavigate()
  // Formik initialization
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
        password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        console.log("API base:", import.meta.env.VITE_API_BASE_URL);
        console.log("Sending to:", `${api}/user/login`);
        try {
            const response = await axios.post(`${api}/user/login`, values, {
              withCredentials: true,      
              headers: { 
                "Content-Type": "application/json" 
              },
            })
            if (response.status === 200) {
              try {
                const response2 = await axios.get(`${api}/user/session`, {
                  withCredentials: true,      
                  headers: { 
                    "Content-Type": "application/json" 
                  },
                })
                console.log("response2", response2);
                if (response2.status === 200) {
                  localStorage.setItem('user', JSON.stringify(response2.data.user));
                  setSessionData(response2.data.user)
                  toast.success(response.data.message)
                  toast.success(response2.data.message)
                  toast.success("Redirecting...")
                  setTimeout(() => {
                    navigate("/?authenticated=true")
                  }, 3000);
                } else {
                  toast.error(response2.data.message)
                }
              } catch (error) {
                console.log(error);
                toast.error(error.message)
              }
            } else {
              toast.error(response.data.message)
              console.log("Error");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setTimeout(() => {
              resetForm()
              setSubmitting(false)
            }, 5000)
        }
    },
  });

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <BgCarousel />
      <div className="overlay z-[-1] absolute w-full h-full inset-0"></div>
      <div className="h-full w-full px-3 py-10 flex justify-center items-center overflow-y-scroll">
        <div className="shadow-[0_-5px_10px_5px] shadow-black/5 rounded-lg bg-tetClr p-5 w-full h-max max-w-lg">
          <div className="flex items-center mx-auto justify-center w-[70px] h-[70px] rounded-full">
            <NavLink to={"/"}>
              <h3 className="text-4xl -translate-x-2 translate-y-1 logo logo2 relative">
                <span className="text-5xl">p</span>
                <span className="absolute -top-3 left-5">p</span>
              </h3>
            </NavLink>
          </div>
          <h3 className="text-xl text-center font-semibold md:w-full w-3/4 mx-auto">
            Welcome to a greener, happier life!
          </h3>
          <form className="space-y-5 mt-10" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-pryClr/30 focus:ring-0 focus:border-secClr/70 rounded-sm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-600 text-sm">{formik.errors.email}</p>
              ) : null}
            </div>

            {/* Password Field */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex pe-2 items-center gap-3 bg-pryClr/30 border focus:ring-0 border-secClr/70 rounded-sm">
                <input
                  type={visibility ? "text" : "password"}
                  name="password"
                  id="password"
                  className="w-full focus:ring-0 focus:border-black bg-transparent border-0"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <i onClick={() => setVisibility(!visibility)}>
                  {visibility ? (
                    <FaEye className="size-4 text-seClr" />
                  ) : (
                    <FaEyeSlash className="size-4 text-seClr" />
                  )}
                </i>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-600 text-sm">{formik.errors.password}</p>
              ) : null}
            </div>

            {/* Remember Me Checkbox */}
            <div>
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                onChange={formik.handleChange}
                checked={formik.values.rememberMe}
              />
              <label
                className="inline-flex ml-3 text-sm font-medium mb-2"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                    type="submit"
                    className="w-1/2 mx-auto bg-compClr text-tetClr rounded-md px-2 py-3"
                    disabled={formik.isSubmitting}
                >
                    {formik.isSubmitting ? "Logging In..." : "Login"}
                </button>
            </div>
          </form>
          <div className="flex gap-5 mt-5 items-center">
            <hr className="border w-full mt-1 border-secClr/30 rounded-full" />
            <span>or</span>
            <hr className="border w-full mt-1 border-secClr/30 rounded-full" />
          </div>
          <NavLink to={"/register"} className={"text-center block"}>
            New here? <span className="underline">Register Here.</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
