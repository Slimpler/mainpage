
import React,{Component}  from "react";
import { Container, Table, TableBody } from "semantic-ui-react";


export class Listado extends Component{
    render(){
        return( 
            <Container textAlign="center">
                <div className="Listado">
                    <h1>Listado de alumnos y Profesor</h1>
                </div>
                <div>
                    <Table fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nombre</Table.HeaderCell>
                                <Table.HeaderCell>Año de carrera</Table.HeaderCell>
                                <Table.HeaderCell>Correo</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Alejandro Iglesias</Table.Cell>
                            <Table.Cell>Profesor</Table.Cell>
                            <Table.Cell>
                                Alejandro.Iglesias@uv.cl
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    </Table>
                </div>
            </Container>      
        )

    };
}