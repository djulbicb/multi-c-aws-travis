import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Fib = () => {

    const [state, setState] = useState({
        seenIndexes: [],
        values: {},
        index: '' 
    })

    useEffect(()=>{
        const fetchValues = () => {
            axios.get('/api/values/current').then(response => {
                setState({...state, values: response.data})
            })
        }
    
        const fetchIndexes = () => {
            axios.get('/api/values/all').then(response => {
                setState({...state, seenIndexes: response.data})
            })
        }
    
        fetchValues()
        fetchIndexes()
    
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/values', {index: state.index}).then(response => {
            setState({...state, index: ''})
        })
    }

    const changeState = (event) => {
        setState({...state, index: event.target.value})
    }

    const renderSeenIndexes = () => {
        return state.seenIndexes.map(({number}) => number).join(',')
    }

    const renderValues = () => {
        const entries = []

        for (let key in state.values) {
            entries.push(
                <div key={key}>
                    Index: {key} - Calculated {state.values[key]}
                </div>
            )
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter you index:</label>
                <input value={state.index} onChange={changeState}></input>
                <button>Submit</button>
            </form>

            <h3>Indexes I have seen:</h3>
            {renderSeenIndexes()}

            <h3>Calculated values</h3>
            {renderValues()}

            <hr/>
        
            {JSON.stringify(state)}
        </div>
    )
}

export default Fib

