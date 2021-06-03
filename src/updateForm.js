import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class UpdateBookForm extends React.Component {
    render() {
        return (
            <>
        
                <Modal show={this.props.showUpdateStatus} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Update Book Info </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(e) => this.props.updateBook(e)}>
                          
                                <label>Book Name</label>
                                <input type='text' onChange={(e) => this.props.updateBookNameProps(e)} value={this.props.bookName} /><br/><br/>

                                <label>Book Description</label>
                                <input type='text' onChange={(e) => this.props.updateBookDescriptionProps(e)} value={this.props.description} /><br/><br/>

                                <label>Book UrlImg</label>
                                <input type='text' onChange={(e) => this.props.updateBookUrlImgProps(e)} value={this.props.urlImg}/><br/><br/>

                                <input type='submit' value='Update Book Info' />
                           
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }
}

export default UpdateBookForm