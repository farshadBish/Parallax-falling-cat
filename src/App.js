import { useRef } from 'react';
import land from './land.png';
import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div className='App'>
      <Parallax pages={3} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2.01}
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/fireship-io/skydiving-cat-parallax/main/src/moon.png)`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
         
        >
          <img src='https://raw.githubusercontent.com/fireship-io/skydiving-cat-parallax/main/src/cat.gif' alt='gif' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
          style={{color:"white",fontSize:"30px"}}
        >
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.8}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2 style={{color:"white",fontSize:"50px"}}>The End!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;