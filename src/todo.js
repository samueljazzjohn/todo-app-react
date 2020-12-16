import React,{Component} from 'react';
import {UncontrolledAlert,Alert,Col,Row,Button,Input,InputGroup,InputGroupAddon,InputGroupText, Container, Table} from 'reactstrap';
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
                            <Alert color="danger" isOpen={this.state.visible} toggle={this.toggle}>
                                {this.state.alert}
                            </Alert>
                        </Col>
                    </Row>
                    <Row className="p-4  mt-5 justify-content-center" id="header">
                        <Col md={6} className="pt-5  addfield ">
                            <InputGroup >
                                <Input id="search" lassName="ml-2 mt-2  text-center" value={this.state.textEntered} placeholder="Add qualification details" type="text" onChange={this.showText}/>
                            </InputGroup>
                        </Col>
                        <Col md={4} className="pt-5 pb-5 addfield text-center">
                            <Button id='button'  className="pl-4 pr-4  " color="danger" onClick={this.addToScreen} >ADD </Button>{' '}
                            <Button id='button' className="  " color="danger" onClick={this.clear}>CLEAR</Button>{' '}
                        </Col>
                    </Row>


                    {/* <Row className="p-3 pl-5 mt-3">
                        <Col>
                            <p className="ml-5 ">{this.state.textEntered.toUpperCase()}</p>
                        </Col>
                    </Row> */}

                    <Row className="mt-5">
                        <Col md={12} className="mt-5 pt-3 justify-content center">
                            <Table className="table mx-auto"  style={{ color: "white", }}>
                                <tr className="text-center">
                                    <th  >SI NO</th>
                                    <th>QUALIFICATION</th>
                                    <th>OPTIONS</th>
                                </tr>
                                <tbody className="text-center">
                                    {this.state.list.map((itm, k) => {
                                        return (
                                            <tr>
                                                <td>{k+1}</td>
                                                <td>{itm.toUpperCase()}</td>
                                                 <td><Button className="pl-4 pr-4 mt-1" color="danger" onClick={()=>{if(window.confirm('Doyou wnat to delete the item?')) {this.delete(k)};}}>DELETE </Button>{' '}
                                                 <Button className="pl-4 pr-4 mt-1" color="danger" onClick={()=>{if(window.confirm('Do you wnat to edit?')) {this.edit(k)};}} >EDIT </Button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>

                </Container>

            </React.Fragment>
        )
    }


}

export default Todo;