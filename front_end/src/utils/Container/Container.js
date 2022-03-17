import "./container.css";

const Container = (props) => {
  console.log("called...", props.children);
  return <div className="main-container">{props.children}</div>;
};

export default Container;
