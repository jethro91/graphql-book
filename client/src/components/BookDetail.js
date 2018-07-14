import React, { Component } from 'react';
import { graphql} from 'react-apollo';

import {getBookQuery} from '../queries/queries';

class BookDetail extends Component { 
  displayBook(){
    const {book} = this.props.data;
    if(this.props.bookId && book){
     if(book.loading){
       return (<div>Loading Details...</div>);
     }
     return(
      <div id="book-detail">
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>
          All books by this author
        </p>
        <ul className="other-books"> 
            {book.author.books.map(authorBook=>{
              return(
                <li key={authorBook.id}>
                  {authorBook.name}
                </li>
              )
            })}
        </ul>
      </div>
     );
    }else{
      return (
        <div>
          No Book Selected
        </div>
      )
    }
  }
  render() {
    return (
      <div id="book-detail">
        {this.displayBook()}
      </div>
    );
  }
}

export default graphql(getBookQuery,  {
  options: (props)=>{
    return {
      variables: {
        id: props.bookId,
      }
    }
  }
})(BookDetail);
