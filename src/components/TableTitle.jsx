import React, {useCallback, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import Searches from "./Searches";
import TableBody from "./TableBody";
import ModalItem from "./ModalItem";
import data from '../data/data.json';

const TableTitle = () => {
    const [state, setState] = useState([]);
    const [output, setOutput] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [message, setMessage] = useState('')
    const searchFoods = useCallback((e) => {
        e.preventDefault()
        let value = e.target.elements[0].value;
        if (value === '') {
            setMessage('The input field is empty, please start typing characters')
            setModalShow(true)
            setState([])
            return
        }

       let arr = data.filter(item => item['Display_Name'].toLowerCase().includes(value));
       // let arr = data.filter(item => item['Display_Name'].toLowerCase().match(//);
        if(arr.length!==0){
            setState(arr)
            setOutput(arr.filter((item,index)=> index<25));
        } else {
            setMessage('No search results, please try different characters')
            setModalShow(true)
        }
    }, []);

    const hendlerModal= useCallback(()=>{
        setModalShow(false);
    },[]);
    const  nextList=()=>{
        let next = output.length
        setOutput(state.filter((item,index)=> index< (next+25)))
    }
    const  removeList=()=>{
        setState([])
    }

    return (
        <>
            <Searches searchFoods={searchFoods}/>
            {state.length!==0 ?
                <>
                    <Table striped bordered hover className="text-center table-secondary">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Portion</th>
                            <th>Calories</th>
                        </tr>
                        </thead>
                        <TableBody array={output}/>
                    </Table>
                    <Button style={{marginRight:'10px'}} onClick={nextList} variant='light'> next 25 </Button>
                    <Button style={{marginLeft:'10px'}} onClick={removeList} variant='light'> remove </Button>
                </>
            : ''}
            <ModalItem animation={false} text={message} show={modalShow} onHide={hendlerModal}/>
        </>
    );
};

export default TableTitle;