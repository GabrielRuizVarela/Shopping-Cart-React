import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import animation from '../utils/animation';

function Home() {
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <Navbar />
      <div className="Home">
        <div id="canvas" style={{ height: '50vh', width: '100vw', overflow: 'hidden' }} />
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat molestiae consequuntur porro aut hic incidunt,
          asperiores perferendis ea vitae eum delectus quo eligendi veritatis magni.
          Aliquid, dolores? Sequi, quasi quisquam?
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
