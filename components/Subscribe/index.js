import React, { useState } from "react";
import axios from "axios";
import ButtonPrimary from "../misc/ButtonPrimary";
import Styles from "./subscribe.module.scss";
const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [subscriber, setSubscriber] = useState(null);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await axios.post("/api/subscribe", { email });
      setSubscriber(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center  py-14">
      <div className="relative w-full mt-16">
        <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
          <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
            <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
              Subscribe Now for <br /> Get Special Features!
            </h5>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <form onSubmit={handleSubscribe}>
            {subscriber ? (
              <div className="text-lg md:text-2xl font-semibold text-green-600">
                Thank for your subscribe!
              </div>
            ) : (
              <div className={Styles.inputGroup}>
                <input
                  value={email}
                  type="email"
                  required
                  placeholder="example@mail.com"
                  className={Styles.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className={Styles.button} type="submit">
                  Join us
                </button>
              </div>
            )}
          </form>
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Subscribe;
