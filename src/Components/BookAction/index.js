import React, { Component } from 'react'

class BookAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.setState ({
            value: this.props.bookData.shelf || 'none'
        })
    }


    updateShelf = (event) => {
        this.setState({ value: this.props.getShelf(event.target.value) })
    }


    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.updateShelf} value={this.state.value}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div >
        )
    }
}

export default BookAction