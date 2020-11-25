import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Boton = () => (

  <div>
    <Button 
      animated='vertical' 
      size='mini' 
      href ="/Principal">
      <Button.Content hidden>Main</Button.Content>
      <Button.Content visible>
        <Icon name='home'/>
      </Button.Content>
    </Button>
    <Button 
      animated='vertical' 
      size='mini' 
      href ="/Menu">
      <Button.Content hidden>Menu</Button.Content>
      <Button.Content visible>
        <Icon name='table' />
      </Button.Content>
    </Button>
    <Button 
      animated='vertical' 
      size='mini' 
      href ="/Paginas">
      <Button.Content hidden>Pages</Button.Content>
      <Button.Content visible>
        <Icon name='archive' />
      </Button.Content>
    </Button>
  </div>
)

export default Boton