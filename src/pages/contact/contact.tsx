import React, { useLayoutEffect, useState } from "react";
import { Navbar } from "../../navbar/navbar";
import "./contact.css";
import gsap from "gsap";
export const Contact: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to("#contact", 1, {
      y: 0,
      opacity: 1,
    });
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [enableBtn, setEnableBtn] = useState(false);

  const validateForm = () => {
    let newErrors = { ...errors };
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    } else {
      newErrors.email = "";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else {
      newErrors.message = "";
    }
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (event) => {
    validateForm();
    if (!validateForm()) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (validateForm()) {
  //     console.log(formData);
  //     // send form data to email or save to database
  //   }
  // };
  return (
    <>
      <Navbar />
      <div className="relative w-screen h-screen overflow-clip" id="contact">
        <form
          className="absolute inset-0 w-fit h-fit m-auto space-y-3 z-10 border border-[#f5f5fa] rounded-md p-5 bg-[#101014]"
          action="https://formsubmit.co/burhanuddinlimdiwala5123@gmail.com"
          method="POST"
        >
          <p className="fredoka font-medium text-2xl">Let's Talk</p>
          <div className="input-block relative h-fit">
            <input
              className="rounded-lg border border-[#f5f5fa] jetbrains block py-1.5 px-5 w-[300px] bg-[#101014]"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              spellCheck="false"
            />
            <span className="placeholder jetbrains">Name</span>
          </div>
          {errors.name && (
            <p className="jetbrain text-red-600 text-sm relative bottom-2">
              {errors.name}
            </p>
          )}
          <div className="input-block relative h-fit">
            <input
              className="rounded-lg border border-[#f5f5fa] jetbrains block py-1.5 px-5 w-[300px] bg-[#101014]"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              spellCheck="false"
            />
            <span className="placeholder jetbrains">Email</span>
          </div>
          {errors.email && (
            <p className="jetbrain text-red-600 text-sm relative bottom-2">
              {errors.email}
            </p>
          )}
          <div className="msg-txt relative h-fit">
            <textarea
              className="rounded-lg border border-[#f5f5fa] jetbrains block py-1.5 px-5 w-[300px] bg-[#101014] h-[125px]"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              spellCheck="false"
            />
            <span className="placeholder jetbrains">Message</span>
          </div>
          {errors.message && (
            <p className="jetbrain text-red-600 text-sm relative bottom-2">
              {errors.message}
            </p>
          )}
          <button
            className="w-full bg-[#ff5c00] py-1.5 text-center rounded-md fredoka font-medium"
            type="submit"
          >
            Send
          </button>
          <div className="flex space-x-5 w-full mt-3">
            <a
              href="https://www.linkedin.com/in/burhanuddin-limdi-4731221b7/"
              target="_blank"
            >
              <img src="/linkedin.png" alt="" width={"25px"} />
            </a>
            <a href="https://github.com/burhanuddin-limdi" target="_blank">
              <img src="/github.png" alt="" width={"25px"} />
            </a>
          </div>
        </form>
        <p className="absolute text-[14rem] text-[#151515] jetbrains font-medium z-[0] -left-[4rem] bottom-[3rem]">
          {"<Contact/>"}
        </p>
      </div>
    </>
  );
};
