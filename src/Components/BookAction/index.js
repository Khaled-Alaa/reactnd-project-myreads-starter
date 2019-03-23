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
        this.props.getShelf(event.target.value)
        this.setState({ value: event.target.value})
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.updateShelf} value={this.state.value}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">{this.state.value == "currentlyReading" ? String.fromCharCode(10004) : null} Currently Reading</option>
                    <option value="wantToRead">{this.state.value == "wantToRead" ? String.fromCharCode(10004) : null} Want to Read</option>
                    <option value="read">{this.state.value == "read" ? String.fromCharCode(10004) : null} Read</option>
                    <option value="none">None</option>
                </select>
            </div >
        )
    }
}

export default BookAction