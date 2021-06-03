import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


 class Form extends  React.Component {
    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title> ADD NEW BOOK </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={(e) => this.props.addBookProps(e)}>
                            <label>Book Name</label>
                            <input type='text' onChange={(e) => this.props.updateBookNameProps(e)} /><br/><br/>

                            <label>Book Description</label>
                            <input type='text' onChange={(e) => this.props.updateBookDescriptionProps(e)}/><br/><br/>

                            <label>Book UrlImg</label>
                            <input type='text' onChange={(e) => this.props.updateBookUrlImgProps(e)} /><br/><br/>

                            <input type='submit' value='Add Book' />
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose1}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </>
        )
    }
}

export default Form