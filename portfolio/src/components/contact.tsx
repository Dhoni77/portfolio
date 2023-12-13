import { ChangeEvent, FormEvent, useState } from "react";
import { sendEmail } from "../api/send";

export const Contact = () => {
  const [form, setForm] = useState({
    to: "",
    message: "",
  });

  const formHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if ("name" in e.target) {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail({
      email: form.to,
      message: form.message,
    }).then(() => {
      setForm(() => ({
        to: '',
        message: ''
      }))
    });
  };

  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        <div className="flex-col">
          <p className="text-3xl font-medium capitalize mb-8 text-center">
            <span className="translate-y-[20px] translate-z-0">|</span>
            <span className="translate-y-[20px] translate-z-0"> </span>
            <span className="translate-y-[20px] translate-z-0">C</span>
            <span className="translate-y-[20px] translate-z-0">o</span>
            <span className="translate-y-[20px] translate-z-0">n</span>
            <span className="translate-y-[20px] translate-z-0">t</span>
            <span className="translate-y-[20px] translate-z-0">a</span>
            <span className="translate-y-[20px] translate-z-0">c</span>
            <span className="translate-y-[20px] translate-z-0">t</span>
            <span className="translate-y-[20px] translate-z-0"> </span>
            <span className="translate-y-[20px] translate-z-0">m</span>
            <span className="translate-y-[20px] translate-z-0">e</span>
          </p>
        </div>
      </h2>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:aldrinmarz7@gmail.com">
          aldrinmarz7@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        onSubmit={(e) => send(e)}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-gray-900"
          type="email"
          onChange={formHandler}
          value={form.to}
          required
          maxLength={100}
          placeholder="Your email"
          name="to"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-gray-900"
          name="message"
          onChange={formHandler}
          value={form.message}
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          Submit
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
          </svg>
        </button>
      </form>
    </section>
  );
};
