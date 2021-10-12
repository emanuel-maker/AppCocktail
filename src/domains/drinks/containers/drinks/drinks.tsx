

import React from "react";
import BeerCard from "../../components/BeerCard/BeerCard";
import { BeerType } from "../../types/beerType";
import { getBeers } from '../../services/api';
import "./style.sass";

const Drinks = () => {

  const [beers, setBeers ] = React.useState<BeerType[]>([]);

  React.useEffect(() => {

    (async () => {
      const beers = await getBeers('page=1&per_page=10');
      setBeers(beers);
    })()
    
  }, [])

  return (
    <div className="container">
        <h1> Bebidas </h1>
        <div>
          <div className="container-drinks">
            <h1> Cervezas</h1>
            <div>
              {
                beers.map(beer => 
                  <BeerCard 
                    key={beer.id} 
                    beer={beer}
                  />
                )
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default Drinks;