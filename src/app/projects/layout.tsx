const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-5">
      <h1 className="text-3xl lg:text-5xl text-slate-700 font-bold text-center">
        These are some of my portfolio projects
      </h1>
      {children}
    </div>
  );
};

export default layout;
