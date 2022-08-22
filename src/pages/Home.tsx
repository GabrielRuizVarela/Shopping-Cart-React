import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import animation from '../utils/animation';
import '../styles/Home.scss';

function Home() {
  useEffect(() => {
    animation();
  }, []);
  return (
    <div className="home-page">
      <Navbar />
      <div className="Home">
        <div
          id="canvas"
          style={{ height: '50vh', width: '100vw', overflow: 'hidden' }}
        />
        <h1>Welcome to my Fake Store</h1>
        <div id="home-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            molestiae consequuntur porro aut hic incidunt, asperiores
            perferendis ea vitae eum delectus quo eligendi veritatis magni.
            Aliquid, dolores? Sequi, quasi quisquam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis, ab. Voluptatibus optio
            nostrum amet assumenda blanditiis libero! Dolore magni quasi,
            tempore qui reiciendis facere necessitatibus error aut, iusto
            expedita autem, a dolorum explicabo nam voluptatum? Enim laboriosam
            nostrum totam maxime facere, sequi doloremque tenetur ut odio
            inventore necessitatibus non distinctio.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
