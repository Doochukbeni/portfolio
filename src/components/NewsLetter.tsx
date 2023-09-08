"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { Button } from "./ui/Button";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();

    if (!email) {
      return toast("Email is required");
    }

    try {
      setLoading(true);
      await axios.post("/api/newsletter", JSON.stringify({ email }), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setEmail("");

      toast.success("sent successfully");
    } catch (error) {
      toast.error("something went wrong, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" my-4 mx-auto w-full">
      <h1 className="text-2xl lg:text-base  mb-4 text-slate-700 dark:text-slate-300">
        Please kindly subscribe to my NewsLetter for exclusive project content
        and collaboration
      </h1>
      <form
        className="flex max-w-3xl bg-slate-100 border "
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          autoFocus
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="outline-none w-full px-2 py-2"
        />
        <Button
          size="lg"
          disabled={loading}
          className="w-full rounded-l-none dark:rounded-r-none dark:bg-slate-600 border-2 max-w-fit"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default NewsLetter;
