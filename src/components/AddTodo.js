import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input type="text" name="title" style={{ flex: '10', padding: '5px' }} placeholder="Add Todo ..." />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
            )
    }
}

export default AddTodo