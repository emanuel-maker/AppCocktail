
import AdminService from "../../../config/Service";
import { BeerType } from "../types/beerType";

const getBeers = async ( param : string) => {

    const beers = await AdminService.request<BeerType[]>(`beers?${param}`);
    
    return beers
}

export { getBeers };