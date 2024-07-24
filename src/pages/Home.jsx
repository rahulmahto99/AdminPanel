import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="md:flex ">
      <div className="md:basis-3/12">
        <Sidebar />
      </div>
      <div className="md:basis-9/12 ">
        <Header />
        <div className="main body">
          <h1>Main body</h1>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
