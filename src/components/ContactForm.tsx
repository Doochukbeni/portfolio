"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./ui/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(name, email, message);

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    if (!name) {
      return toast("Name is required");
    }
    if (!email) {
      return toast("Email is required");
    }
    if (!message) {
      return toast("Message is required");
    }

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:3000/api/mailer",
        JSON.stringify({ name, email, message }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success("message sent successfully");
    } catch (error) {
      toast.error("something went wrong, try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-full mt-0 p-2 text-start sm:mt-2"
      >
        <div className="sm:col-span-2 mt-2.5">
          <label
            htmlFor="name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
              placeholder="Name"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2.5">
          <label
            htmlFor="email"
            className="block capitalize text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              required
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2.5">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              value={message}
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              cols={30}
              rows={10}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div className="flex mt-2.5 gap-x-4 sm:col-span-2">
          <label
            className="text-sm  pl-2 leading-6 text-gray-600"
            id="switch-1-label"
          >
            By submitting this form, you agree to our
            <Link href="/" className="font-semibold text-indigo-600 ml-1">
              privacy&nbsp;policy
            </Link>
          </label>
        </div>

        <Button
          type="submit"
          disabled={loading}
          onClick={handleSubmit}
          className="w-full my-4 dark:bg-slate-200"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
