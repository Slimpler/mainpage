
import { Container, Divider, Header, Image , Segment, Message} from 'semantic-ui-react';

//Componentes a utilizar
import {Listado} from './components/Listado';
import {ComponenteMenu} from './components/menu/ComponenteMenu';
import Validador from './components/componentesValidador/Validador';
import {Formulario} from './components/Formulario';
import {Principal} from './components/menu/Principal'

import Nav from './Nav';
import Boton from './components/Boton';

//Seccion de router
import {
  BrowserRouter as 
  Router, 
  Switch, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Segment>

      <div className="App">
          <Header as='h2' icon textAlign='center'>
            <h1>Universidad de Valparaíso</h1>
            <Image
              centered
              size='large'
              src='https://www.pngfind.com/pngs/m/396-3962285_png-transparent-images-pluspng-imagenes-de-lobos-de.png'
            />
            <h1>Nicolás Delgado Oyarce</h1>
            <div className="App-header1">
              <Boton/>
            </div>
          </Header>
          <Header ></Header>
        <body>
          <segment>
            <div>
              <div>
                <div>
                  <Switch>
                    <Route path="/Principal" component={Principal} />
                    <Route path="/Menu" component={ComponenteMenu} />
                    <Route path="/Listado" component={Listado} />
                    <Route path="/Formulario" component={Formulario} />
                    <Route path="/Validador" component={Validador} />
                  </Switch>
                </div>
              </div>
            </div>
          </segment>
        </body>
      </div>      
      </Segment>
    </Router>

  );
}
export default App;
