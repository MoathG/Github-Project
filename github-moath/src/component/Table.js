import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div>
                <table className= 'table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Number</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Rebo status</th>
                            <th scope='col'>Check</th>
                            <th scope='col'>Is private</th>
                            <th scope='col'>Language</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
