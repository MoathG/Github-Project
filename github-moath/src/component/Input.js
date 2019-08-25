import React, { Component } from 'react'

export default class Input extends Component {
    state = {
        title: '',
        language: '',
        Private: '',
    }

    change = async (e) => {
        await this.setState({
            [e.target.name] : e.target.value,
        });

        if(this.state.Private === 'Private') {
            this.setState({status: true})
        } else if (this.state.Private === 'Public') {
            this.setState({status: false})
        }
    }

    reset = () => {
        this.setState({
            title: '',
            Private: '',
            status: null,
        })
    }


    render() {
        const {title, language, Private} = this.state

        return (
            <div>
                <form>
                    <input
                        name='title'
                        value={title}
                        type='text'
                        className='form-control mb-2 mr-sm-2'
                        placeholder="repo title"
                        onChange={this.change}
                    />
                    <input
                        name='language'
                        value={language}
                        type='text'
                        className='form-control mb-2 mr-sm-2'
                        placeholder="repo language"
                        onChange={this.change}
                    />
                    <select
                        name='Private'
                        value={Private}
                        className='form-control mb-2 mr-sm-2'
                        id="exampleFormControlSelect1"
                        onChange={this.change}
                    >
                        <option value= 'Private'>Private</option>
                        <option value= 'Public'>Public</option>
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
