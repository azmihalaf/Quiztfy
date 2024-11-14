import Navbar from "../components/Navbar";
import Content from "../components/contents/HomeContent";
import Footer from "../components/Footer";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="full-page-bg">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
