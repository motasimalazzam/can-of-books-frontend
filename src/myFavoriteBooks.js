import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false
    }
  }

  componentDidMount = async () => {
    const books = await axios.get('http://localhost:3001/books', { params: { email: this.props.auth0.user.email } })
    console.log('books', books.data)
    this.setState({
      books: books.data,
      showBooks: true
    });
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Carousel style={{width:'400px'}}>
          {this.state.showBooks &&
          this.state.books.map(item =>{
            return(
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.urlImg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.bookName}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          )})}
        </Carousel>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
