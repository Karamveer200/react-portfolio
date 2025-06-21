const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`hero-badge text-xl sm:text-2xl mb-4 font-bold`}>
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-4xl text-2xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
