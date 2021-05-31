import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false
    }
  }

  getFavoritBook = async () => {
    // let server=process.env.REACT_APP_SERVER;

    const booksUrl = await axios.get('http://localhost:3001/books', { params: { email: this.props.auth0.user.ownerEmail } })
    // const booksUrl = await axios.get(`${server}/books?email=${this.props.auth0.user.email}`)
    console.log('books', booksUrl.data)
    this.setState({
      books: booksUrl.data,
      showBooks: true
    });
  }

  render() {
    return(
      
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      {this.state.showBooks &&
    
            <p>{this.state.books[0].ownerEmail}</p>
            }

            <p>hi</p>
      </Jumbotron>



      
    )
  }
}

export default withAuth0(MyFavoriteBooks) ;
