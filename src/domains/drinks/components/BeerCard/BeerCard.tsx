import "./style.sass";
import { BeerType } from "../../types/beerType";

type TProps = {
    beer: BeerType;
}

const BeerCard = ({ beer } : TProps) => {

  const { name, description, image_url, abv, food_pairing } = beer;

  const setAbvColor = () => {

    if(abv <= 5) return "abvYellow"
    
    if(abv > 10) return "abvRed"
    
    return "abvOrange"
  }

  return (
    <div className="beer-card">
        <div className="beer-row">
            <div className="container-img">
                <img src={image_url} alt="" />
            </div>
            <div className="container-desc">
                <h3>{ name }</h3>
                <p> { description } </p>
                <h5>Ideal para combinar con: { food_pairing.toString() }. </h5>
            </div>
        </div>
        <div className={`mark ${setAbvColor()}`}>
            <h3>
                { abv }
            </h3>
        </div>
    </div>
  );
}

export default BeerCard;