import React,{Component} from 'react';
import {Col,Row,Button,Input,InputGroup,InputGroupAddon,InputGroupText, Container, Table} from 'reactstrap';
import './todo.css'


class Todo extends Component{

    constructor(props){
        super(props)
        this.state={
            textEntered:"",
            list:[],

        }
    }

    showText=(e)=>{
        this.setState({textEntered:e.target.value.toUpperCase()})
    }

    addToScreen=(e)=>{
        if(this.state.textEntered==='')
        {
            alert("Please enter something")
        }
        if(this.state.list.includes(this.state.textEntered)){
            alert("This is already entered")
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
                    <Row className="pt-5 pl-4 justify-content-center">
                        <Col md={8} className="pt-5 addfield ">
                            <InputGroup>
                                <Input className="ml-2 mt-2 float-right text-center" value={this.state.textEntered} placeholder="Add qualification details" type="text" onChange={this.showText}/>
                            </InputGroup>
                        </Col>
                        <Col md={4} className="pt-5 addfield ">
                            <Button className="pl-4 pr-4 mt-2" color="danger" onClick={this.addToScreen} >ADD </Button>{' '}
                            <Button className=" mt-2" color="danger" onClick={this.clear}>CLEAR</Button>{' '}
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
                                    <th></th>
                                </tr>
                                <tbody className="text-center">
                                    {this.state.list.map((itm, k) => {
                                        return (
                                            <tr>
                                                <td>{k+1}</td>
                                                <td>{itm.toUpperCase()}</td>
                                                 <td><Button className="pl-4 pr-4 mt-1" color="danger" onClick={()=>this.delete(k)}>DELETE </Button>{' '}
                                                 <Button className="pl-4 pr-4 mt-1" color="danger" onClick={()=>this.edit(k)} >EDIT </Button></td>
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