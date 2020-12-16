import React,{Component} from 'react';
import {ListGroup,ListGroupItem,UncontrolledAlert,Alert,Col,Row,Button,Input,InputGroup,InputGroupAddon,InputGroupText, Container, Table} from 'reactstrap';
import './todo.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'




class Todo extends Component{

    constructor(props){
        super(props)
        this.state={
            textEntered:"",
            list:[],
            visible:false,
            alert:''

        }
    }

    toggle=()=>{
        this.setState({visible:!this.state.visible})
    }

    showText=(e)=>{
        this.setState({textEntered:e.target.value.toUpperCase()})
    }

    addToScreen=(e)=>{
        if(this.state.textEntered==='')
        {
            this.state.alert="please enter qualification details"
            this.setState({alert:this.state.alert})
            this.toggle()
        }
        else if(this.state.list.includes(this.state.textEntered)){
            this.state.alert="This is already exist in the list"
            this.setState({alert:this.state.alert})
            this.toggle()
        }
        else{
            this.state.list.push(this.state.textEntered)
            this.setState({list:this.state.list})
            this.setState({textEntered:''})
        }

    }

    delete=(k)=>{
        this.state.list.splice(k, 1);
        this.setState({list:this.state.list });


    }
    
    edit=(k)=>{
        this.state.textEntered=this.state.list[k]
        this.state.list.splice(k, 1);
        this.setState({list:this.state.list });
        this.setState({textEntered:this.state.textEntered})
    }


    clear=()=>{this.setState({textEntered:""})}


    render(){
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col className="pt-2">
                            <Alert color="danger" isOpen={this.state.visible} toggle={this.toggle} id="alert">
                                {this.state.alert}
                            </Alert>
                        </Col>
                    </Row>
                    <Row className="p-4  mt-5 justify-content-center" id="header">
                        <Col lg={6} className="pt-5  addfield ">
                            <InputGroup id="searchparent">
                                <Input id="search" className="  text-center" value={this.state.textEntered} placeholder="Add qualification details" type="text" onChange={this.showText}/>
                            </InputGroup>
                        </Col>
                        <Col lg={4} className="pt-5 pb-5 addfield text-center">
                            <Button id='button'  className="pl-4 pr-4  "  onClick={this.addToScreen} >ADD </Button>{' '}
                            <Button id='button' className="  " onClick={this.clear}>CLEAR</Button>{' '}
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col md={12} className="mt-5 pt-3 justify-content center">
                            {this.state.list.map((itm, k) => {
                                        return (
                                        <ListGroup >
                                            <ListGroupItem key='k' className="pl-5 mb-4" id="listitem" >{itm.toUpperCase()}
                                            <i class="far fa-edit" id="edit-icon" onClick={()=>{if(window.confirm('Do you wnat to edit?')) {this.edit(k)};}}></i>
                                            <i class="fas fa-times" id='delete-icon' onClick={()=>{if(window.confirm('Doyou wnat to delete the item?')) {this.delete(k)};}}></i></ListGroupItem>
                                          </ListGroup>
                                            
                                        )
                                    })}
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }


}

export default Todo;