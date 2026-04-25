import { useState } from "react"
import styles from "./hero.module.css"

export default function Hero() {
  const [count, setCount] = useState(0);
  const heroArray = ['"Our Trusted Partner" - Mongoose Music', '"Best Boutique Guitars" - Json Bourn', '"RESTful API" - Peter Slempers'];

  //With each click, increase the count until 2, then start over.
  function h2Click() {
    if (count > 1) {
      setCount(0);
    }
    else {
      setCount(count + 1);
      console.log('yep');
    }
  }

  return (
    <div className={styles['hero']}>
      <p>At React Luthiers, we craft & repair the finest guitars.</p>
      <h1 onClick={h2Click}>{heroArray[count]}</h1>
      <p>Ask our Retailers.</p>
      {/* <img src={require('../assets/dark-guitar-hero.png')} alt="Guitar" /> */}
    </div>
  );
}