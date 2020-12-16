import React,{Component} from 'react';
import {ListGroup,ListGroupItem,UncontrolledAlert,Alert,Col,Row,Button,Input,InputGroup,InputGroupAddon,InputGroupText, Container, Table} from 'reactstrap';
import './todo.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Swal from 'sweetalert2';




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
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                className:'sweet-alert',
                closeOnClickOutside: false,
                text: 'please enter your qualification details!'
              })

        }
        else if(this.state.list.includes(this.state.textEntered)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                className:'sweet-alert',
                closeOnClickOutside: false,
                text: 'This is already exist in your list!'
              })
        }
        else{
            this.state.list.push(this.state.textEntered)
            this.setState({list:this.state.list})
            this.setState({textEntered:''})
        }

    }

    delete=(k)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                this.state.list.splice(k, 1);
                this.setState({list:this.state.list });
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })


    }
    
    edit=async (k)=>{
        const { value: text } = await Swal.fire({
            title: 'Enter your qaulification details',
            input: 'text',
            inputLabel: 'Your qualification',
            inputValue:this.state.list[k],
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }else{
                  this.state.list.splice(k,1,value)
                  this.setState({list:this.state.list });
              }
            }
          })
          
          if (text) {
            Swal.fire(`Your added qualification  is ${text}`)
          }
    }


    clear=()=>{this.setState({textEntered:""})}


    render(){
        return(
            <React.Fragment>
                <Container className="pt-5">
                    {/* <Row>
                        <Col className="pt-2">
                            <Alert color="danger" isOpen={this.state.visible} toggle={this.toggle} id="alert">
                                {this.state.alert}
                            </Alert>
                        </Col>
                    </Row> */}
                    <Row className="p-4 pt-5 justify-content-center" id="header">
                        <Col lg={6} className=" pt-5  addfield ">
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
                                            <i class="far fa-edit" id="edit-icon" onClick={()=>{this.edit(k)}}></i>
                                            <i class="fas fa-times" id='delete-icon' onClick={()=>{this.delete(k)}}></i></ListGroupItem>
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