import ComingSoon from "../ComingSoon";

const Blogs = () => {
  return (
    <div className="max-h-screen min-h-screen">
      <h2 className="text-7xl text-white text-center mt-9 heading-font">
        Blog
        <span className="heading-font text-red-600 font-bold">
          &#123;S&#125;
        </span>
      </h2>
      <ComingSoon text="Coming Soon" />
    </div>
  );
};

export default Blogs;
