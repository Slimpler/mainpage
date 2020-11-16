import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

export class ComponenteMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
      <Container textAlign="center">
        <Menu >
          <Menu.Item
            name='Listado Curso'
            active={activeItem === 'Listado Curso'}
            content='Listado Curso'
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='Validador'
            active={activeItem === 'Validador'}
            content='Validador'
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='Formulario'
            active={activeItem === 'Formulario'}
            content='Formulario'
            onClick={this.handleItemClick}
          />
        </Menu>
      </Container>

    )
  }
}