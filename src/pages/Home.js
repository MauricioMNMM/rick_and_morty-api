import { useState, useEffect } from "react";
import Target from "./../components/Target";

function Home() {
  const [rickAndMorty, setRickAndMorty] = useState([]);
  useEffect(() => {
    try {
      fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((response) => {
          setRickAndMorty(response.results);
        }, []);
    } catch (e) {
      console.log(e);
    }
  });

  const alerta = (event) => {
    event.preventDefault();
    alert("Esto sigue en prueba...");
  };
  return (
    <div className="w-4/5 m-auto">
      <div className="flex flex-wrap" onClick={alerta}>
        {rickAndMorty.map((target) => {
          return (
            <div key={target.id}>
              <Target target={target} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
