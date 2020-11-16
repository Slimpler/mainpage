
import { Container, Divider, Header, Image } from 'semantic-ui-react';
import {Listado} from './Listado';
import {ComponenteMenu} from './ComponenteMenu';
import Validador from './ComponentesValidador/Validador';
import { Formulario } from './Formulario';

function App() {
  return (
    <div className="App">
      <Header as='h2' icon textAlign='center'>     
      <h1>Semantic UI</h1>
        <Image
          centered
          size='large'
          src='https://miro.medium.com/max/256/0*90ubl17sSaFcwNRu.png'
        />
      <h3>Para la clase de Desarrollo Web</h3>
    </Header>
    <Divider/>
      <ComponenteMenu/>
    <Divider/>
      <Listado/>
    <Divider/>
      <Container textAlign="center">
            <Validador valor=""/>
      </Container>
    <Divider/>
      <Container>
          <Formulario />
      </Container>

    </div>
  );
}

export default App;
