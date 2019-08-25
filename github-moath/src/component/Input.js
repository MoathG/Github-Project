import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        className='form-control mb-2 mr-sm-2'
                        placeholder="repo title"
                    />
                    <input
                        type='text'
                        className='form-control mb-2 mr-sm-2'
                        placeholder="repo language"
                    />
                    <select
                        className='form-control mb-2 mr-sm-2'
                        id="exampleFormControlSelect1"
                    >
                        <option>Private</option>
                        <option>Public</option>
                    </select>
                    <button type='submit' className='btn btn-primary mb-2'>Add Rebo</button>
                </form>

                <div>
                    <button
                        className= 'btn btn-outline-primary m-1'
                        type= 'submit'
                    >
                        get all repos
                    </button>
                </div>
            </div>
        )
    }
}
