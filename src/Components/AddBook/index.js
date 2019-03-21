import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AddBook extends Component {
    state = {
        showSearchPage: false
    }
    render() {
        return (
            <div className="open-search">
                <Link to='/search' onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
        )
    }
}

export default AddBook