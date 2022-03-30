import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import Container from "../container/Container";

const PageLayout = (props) => {
  return (
    <div>
      <Navbar />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};

export default PageLayout;
