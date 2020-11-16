import React, { Component } from 'react'
import { Form, Confirm} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Masculino', value: 'Masculino' },
  { key: 'f', text: 'Femenino', value: 'Femenino' },
  { key: 'o', text: 'Otro', value: 'Otro' },
]

export class Formulario extends Component {
  state = { open: false, resultado: ''}
  handleChange = (e, { value }) => this.setState({ value })
   

  
  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ resultado: 'Enviado', open: false })
  handleCancel = () => this.setState({ resultado: 'No enviado', open: false }) 
  
  render() {
    const { open, resultado, value } = this.state
    return (
     
      <Form> 
        <h1>--Este es un formulario de registro--</h1>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Nombre' placeholder='Nombre' />
          <Form.Input fluid label='Apellidos' placeholder='Apellidos' />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Select fluid label='Género' options={options} placeholder='Género' />
          <Form.Input fluid label='Correo Electrónico' placeholder='Email@gmail.com' />

        </Form.Group>
        
        <Form.TextArea label='Información sobre Ud.' placeholder='Cuente sobre ud...' />
        <Form.Checkbox label='Estoy de acuerdo con los terminos y condiciones' />


        <Form.Button onClick = {this.show}>Enviar</Form.Button>
        <Confirm content="¿Estas seguro?"
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}  
                  
        />
        <p>
          Resultado: <em>{resultado}</em>
        </p>

      </Form>
    )
  }
}