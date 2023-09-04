import HomeProject from "@/components/(projects)/HomeProject";
import Testimonials from "@/components/(testimonials)/Testimonials";
import TestimonialsBackground from "@/components/(testimonials)/TestimonialsBackground";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto px-2">
      <Hero />
      <hr className="border shadow-md rounded-t-md bg-slate-200 my-0 w-1/2 mx-auto" />
      <HomeProject />
      <hr className="border shadow-md rounded-t-md bg-slate-200 my-0 w-1/2 mx-auto" />

      <section className="relative w-full bg-zinc-200  my-10 mx-auto isolate overflow-hidden">
        <TestimonialsBackground />
        <Testimonials />
      </section>
    </main>
  );
}
