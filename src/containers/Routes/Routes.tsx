
import Proposals from '../../domains/proposals/pages/main';
import Drinks from '../../domains/drinks/pages/main';
import { Switch, BrowserRouter, Route  } from 'react-router-dom';
import './style.sass';
import MenuTabs from '../../components/MenuTabs/MenuTabs';

const Routes = () => {
    return (
        <BrowserRouter>
          <MenuTabs/>
          <div className="container-main">
              <Switch>
                <Route path="/proposals" component={Proposals}/>
                <Route path="/drinks" component={Drinks}/>
                <Route path="/"/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }

export default Routes;