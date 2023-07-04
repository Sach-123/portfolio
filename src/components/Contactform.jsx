import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ndmnzbs",
        "template_oxu2u2p",
        form.current,
        "z0t0JYvFdET-0Qv07"
      )
      .then(
        (result) => {
          toast("Sent Successfully👍");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mt-5 flex flex-col">
          <label className="my-1">Name</label>
          <input
            type="text"
            name="user_name"
            className="bg-[#444A56] p-2 text-xl font-light ring-emerald-500 focus:outline-none focus:ring-1"
            required
          />
        </div>
        <div className="mt-5 flex flex-col">
          <label className="my-1">Email</label>
          <input
            type="email"
            name="user_email"
            className="bg-[#444A56] p-2 text-xl font-light ring-emerald-500 focus:outline-none focus:ring-1"
          />
        </div>
        <div className="mt-5 flex flex-col">
          <label className="my-1">Message</label>
          <textarea
            name="message"
            rows={4}
            className="bg-[#444A56] p-2 text-xl font-light ring-emerald-500 focus:outline-none focus:ring-1"
            placeholder="Feel free to share your thought/suggestion/advice or any good joke😉"
          />
          <input
            type="submit"
            value="Send"
            className="m-auto my-5 h-[35px] cursor-pointer  rounded-2xl border border-primary px-6 hover:border-2  active:bg-[#A030BF]"
          />
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contactform;
