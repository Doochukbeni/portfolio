import AboutTools from "@/components/AboutTools";
import AboutHero from "@/components/AboutHero";
import AboutHeader from "@/components/AboutHeader";

export const metadata = {
  title: "About Me",
  description: "A brief introduction of personality as a Full Stack developer",
};

const Page = () => {
  return (
    <section className="flex flex-col my-5 mx-auto gap-10 py-8">
      <AboutHeader />
      <AboutHero />
      <AboutTools />
    </section>
  );
};

export default Page;
