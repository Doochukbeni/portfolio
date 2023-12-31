import Image from "next/image";
import Link from "next/link";
import { projectList } from "@/components/(projects)/projectList";
import { Button } from "@/components/ui/Button";

const ProjectPage = ({ params }: { params: { slugId: string } }) => {
  const id = parseInt(params.slugId);

  const data = projectList.find((item) => item.id === id);

  return (
    <section className="sm:my-10 h-screen">
      <main className="flex flex-col-reverse items-center mx-auto lg:flex-row gap-10 my-5">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="font-semibold text-3xl dark:text-slate-100 md:text-5xl text-slate-900 capitalize hero__heading">
            {data?.title}
          </h1>
          <p className="text-sm dark:text-slate-300 text-slate-700 md:text-lg font-semibold  text-justify">
            {data?.description}
          </p>
          <Link
            href={data?.github!}
            target="_blank"
            className="text-sm text-slate-900 dark:text-slate-400 underline"
          >
            Source Code
          </Link>

          <Button
            size="default"
            className="p-5 max-w-fit rounded-lg  dark:bg-slate-700 dark:hover:bg-slate-800 w-full"
          >
            <Link href={data?.url!} target="_blank">
              Explore
            </Link>
          </Button>
        </div>
        <div className="flex-1 w-full max-w-2xl mx-auto  h-full items-center pt-3 shadow-md relative">
          <Image
            src={data?.image!}
            alt="category image"
            width={700}
            height={118}
            className="rounded-md object-cover"
          />
        </div>
      </main>
    </section>
  );
};

export default ProjectPage;
