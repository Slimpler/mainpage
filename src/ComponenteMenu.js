import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Message, Segment } from 'semantic-ui-react'

export class ComponenteMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        <Segment>
          <Container textAlign="center">
            <Menu compact>
              <Link to='/Listado'>
                <Menu.Item
                  name='Listado Curso'
                  active={activeItem === 'Listado Curso'}
                  content='Listado Curso'
                  onClick={this.handleItemClick}
                />

              </Link>
              <Link to='/Validador'>
              <Menu.Item
                name='Validador'
                active={activeItem === 'Validador'}
                content='Validador'
                onClick={this.handleItemClick}
              />
              </Link>
              <Link to='/Formulario'>
              <Menu.Item
                name='Formulario'
                active={activeItem === 'Formulario'}
                content='Formulario'
                onClick={this.handleItemClick}
              />
              </Link>
            </Menu>
          </Container>
        </Segment>
        <Segment>
          Insertar un video de semantic ui
        </Segment>  
      </Segment>

    )
  }
}