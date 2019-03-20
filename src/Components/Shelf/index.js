import React, {Component} from 'react'
import Book from '../Book'

class Shelf extends Component{

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfData.name}</h2>
                <Book/>
            </div>    
        )
    }
}

export default Shelf