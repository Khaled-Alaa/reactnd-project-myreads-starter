import React, { Component } from 'react'
import Shelf from '../../Components/Shelf'
import AddBook from '../../Components/AddBook'


class Home extends Component {

    shelfData = [{ name: 'Currently Reading', id: 1 }, { name: 'Want to Read', id: 2 }, { name: 'Read', id: 3 }]
    render() {

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>{
                            this.shelfData.map((shelf) => {
                                return <Shelf
                                    updateShelfId={this.shelfData}
                                    shelfData={shelf}
                                    books={this.props.books
                                        .filter((book) => {
                                            return book['shelfId'] === shelf.id
                                        })} />
                            })
                        }
                        </div>
                    </div>
                </div>
                )}
                <AddBook/>
            </div>
        )
    }
}

export default Home
