
import { Container, Divider, Header, Image } from 'semantic-ui-react';
import {Listado} from './Listado';
import {ComponenteMenu} from './ComponenteMenu';
import Validador from './ComponentesValidador/Validador';
import { Formulario } from './Formulario';

import Nav from './Nav';

//Seccion de router
import {BrowserRouter as 
  Router, 
  Switch, 
  Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
          <Header as='h2' icon textAlign='center'>
            <h1>Semantic UI</h1>
            <Image
              centered
              size='large'
              src='https://miro.medium.com/max/256/0*90ubl17sSaFcwNRu.png'
            />
            <h3>Para la clase de Desarrollo Web</h3>
            <div className="App-header1">

            </div>
          </Header>
        <body>
          <segment>
            <div>
              <div>
                <div>
                  <switch>
                    <Route path="/" component={Home} />
                    <Route path="/Menu" component={ComponenteMenu} />
                    <Route path="/Listado" component={Listado} />
                    <Route path="/Formulario" component={Formulario} />
                    <Route path="/Validador" component={Validador} />
                  </switch>
                </div>
              </div>
            </div>
          </segment>
        </body>


      </div>
    </Router>

  );
}

/*
<Divider />
<ComponenteMenu />
<Divider />
<Listado />
<Divider />
<Container textAlign="center">
  <Validador valor="" />
</Container>
<Divider />
<Container>
  <Formulario />
</Container>
*/

const Home = () => (
  <div>
    <h1>
      Pagina de inicio: "HOME"
    </h1>
    <div>
      <Nav/>
    </div>
  </div>
)
export default App;
