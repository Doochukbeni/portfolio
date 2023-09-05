const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-10">
      <h1 className="sm:text-7xl text-5xl text-slate-700 font-bold text-center">
        These are some of my portfolio projects
      </h1>
      {children}
    </div>
  );
};

export default layout;
