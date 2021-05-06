import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const Searches = ({searchFoods}) => {
    const [value, setValue] = useState('');
    const handler = (e) => {
        setValue(e.target.value)
    };

    return (
        <Form onSubmit={searchFoods} className='d-inline-flex align-items-center form-group'>
            <input className='input-row' type='text' onChange={handler} value={value}/>
            <Button type='submit' variant='light'> Search </Button>
        </Form>
    )
}

export default Searches;