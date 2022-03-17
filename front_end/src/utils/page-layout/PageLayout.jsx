import Container from "../container/Container";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

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
