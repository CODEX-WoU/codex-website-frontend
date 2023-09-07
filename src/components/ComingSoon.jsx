import "../styles/App.css";

const ComingSoon = (props) => {
  return (
    <div
      className={`${props.className} flex items-center justify-center h-screen`}
    >
      <h3
        className={`${props.className} text-4xl xl:text-7xl text-transparent  heading-font bg-gradient-to-r from-red-700 to-white bg-clip-text`}
      >
        {props.text}
      </h3>
    </div>
  );
};

export default ComingSoon;
