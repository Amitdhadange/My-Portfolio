import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { BallTriangle } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-black h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-black">
          <Nav />
          <Banner />
          <Skill />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
