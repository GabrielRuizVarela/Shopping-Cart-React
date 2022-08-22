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
            inventore necessitatibus non distinctio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores enim accusamus aliquam tenetur
            obcaecati. Dolore deleniti magni, ea nam in distinctio quaerat hic
            nisi accusantium velit esse reiciendis laboriosam molestiae
            obcaecati tempore provident voluptatem alias iure. Cum, praesentium
            vel deleniti quo velit repellat accusamus minima ab amet dolorem
            incidunt quae reprehenderit nulla cumque quos voluptatem, tempora
            autem iusto earum doloremque sed natus sint? Repellendus explicabo
            veniam vel doloribus asperiores ad dolor quia vitae ipsa amet.
            Magnam dicta quos inventore harum totam? Accusantium, minus. Dolores
            non error saepe ipsum ab similique tenetur dolorum. Aliquid libero
            perferendis deserunt et distinctio accusamus hic? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quis explicabo nobis error
            iure quae ullam! Voluptatem corporis hic illum ducimus? Magni,
            inventore molestias nesciunt eligendi mollitia rem harum quos culpa
            sit porro sapiente. Rem, vel dolor rerum id magnam neque iure
            expedita explicabo enim non totam quibusdam animi temporibus ullam
            veritatis officia quia maxime. Qui autem perferendis placeat quia
            beatae! Laudantium nisi accusantium, omnis modi quas debitis
            voluptate ducimus id alias minima accusamus quaerat labore tempora
            saepe at quidem dolores, veritatis voluptas aliquid et eligendi odio
            magni! Qui aliquid neque eum, quia suscipit sunt, dicta perferendis
            tempore iure, vitae sed.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
