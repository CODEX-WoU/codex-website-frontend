import "../styles/App.css";

const ComingSoon = (props) => {
  return (
    <div
      className={`${props.className} flex items-center align-middle justify-center h-[85%]`}
    >
      <h3
        className={`${props.className} min-h-[75%] text-4xl xl:text-9xl flex items-center align-middle justify-center text-transparent  heading-font bg-gradient-to-r from-red-700 to-white bg-clip-text`}
      >
        {props.text}
      </h3>
    </div>
  );
};

export default ComingSoon;
