
import { Container, Divider, Header, Image , Segment, Message} from 'semantic-ui-react';
import {Listado} from './Listado';
import {ComponenteMenu} from './ComponenteMenu';
import Validador from './ComponentesValidador/Validador';
import { Formulario } from './Formulario';

import logo from './logo.svg';
import Nav from './Nav';
import Boton from './Boton';

//Seccion de router
import {BrowserRouter as 
  Router, 
  Switch, 
  Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Segment>

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


const Principal = () => (
  
  <Segment>
    
    <div>
      <div>
        <h1>Pagina Principal</h1>
      </div>
      <div>
        <h2>Bienvenidos</h2>

      </div>
    </div>
    <Divider section />
    <>
      <Message compact>
        <Message.Header>Información de Semantic UI</Message.Header>
        <p>
          Semantic UI es un framework para crear el diseño de interfaces de manera responsive utilizando HTML/CSS legible.
        </p>
        <p>
          Empezó su andadura en 2013 y actualmente va por la versión 2.2.  Viene integrado con otros frameworks o librerías como son Angular, React, Ember o Meteor.
        </p>
      </Message>
      <Divider section />
      <Message compact>
        <Message.Header>Utiliza cinco categorías descriptivas para definir los componentes:</Message.Header>
        <Message.List>
          <Message.Item>UI Element: un bloque de construcción básico. Puede aparecer solo o en grupo. Por ejemplo, un botón puede ser independiente o puede estar dentro de un grupo de botones.</Message.Item>
          <Message.Item>UI Collection: es un grupo de diferentes tipos de elementos que son inter-dependientes. Por ejemplo, un formulario web puede tener botones, inputs, checkboxes, iconos etc.</Message.Item>
          <Message.Item>UI View: representa una pieza común de contenido del sitio web. Por ejemplo, una sección de feeds o comentarios.</Message.Item>
          <Message.Item>UI Module: es un componente con funcionalidad interactiva basada en JavaScript, como son los accodions, modales etc.</Message.Item>
          <Message.Item>UI Behaviour: es un componente que no puede existir de forma independiente, sino que se utiliza para inyectar funcionalidad en otros componentes.</Message.Item>
        </Message.List>
      </Message>

    </>
    <Divider section />
    <img src={logo} className="App-logo" alt="logo" />
  </Segment>
  
)
export default App;
