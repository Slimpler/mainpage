
import React,{Component}  from "react";
import { Container, Table, TableBody } from "semantic-ui-react";
import { Divider, Header, Image , Segment, Message} from 'semantic-ui-react';
import logo from '../../images/logo.svg';

export class Principal extends Component {
    render() {  
        return (
            <Segment>   
            <div>
                <div>
                <h1>Main Page</h1>
                </div>
                <div>
                <h2>Welcome</h2>

                </div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            </Segment>
        )
    }
}
export default Principal;