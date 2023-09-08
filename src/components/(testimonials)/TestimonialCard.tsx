import Image from "next/image";

interface TestimonialProps {
  logo: string;
  image: string;
  name: string;

  position: string;
  content: string;
}

const Testimonial = ({
  logo,
  image,
  name,
  position,
  content,
}: TestimonialProps) => {
  return (
    <div className="border border-solid m-4 p-4 shadow-xl bg-white dark:bg-slate-600 rounded-lg border-slate-100 dark:border-slate-500">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          className="mx-auto object-contain h-12"
          src={logo}
          alt="company logo"
          height={30}
          width={100}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-lg font-semibold leading-5 dark:text-slate-300 text-gray-900 sm:text-2xl sm:leading-9">
            <p>“{content}”</p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              className="mx-auto h-10 w-10 object-contain rounded-full"
              src={image}
              alt=""
              height={30}
              width={30}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-sm sm:text-base">
              <div className="font-semibold dark:text-slate-300 text-gray-900">
                {name}
              </div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600 dark:text-gray-400">{position}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testimonial;
