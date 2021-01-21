import React, { Component } from 'react';
import { Control, Errors, LocalForm } from 'react-redux-form';
import {
	Col,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	Row,
	Button,
} from 'reactstrap';

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
	handleSubmit = (values) => {
		console.log('Current State is: ' + JSON.stringify(values));
		alert('Current State is: ' + JSON.stringify(values));
	};
	render() {
		return (
			<Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
				<ModalHeader toggle={this.props.toggleModal}>
					Submit Comment
				</ModalHeader>
				<ModalBody>
					<LocalForm
						onSubmit={(values) => {
							this.handleSubmit(values);
						}}
					>
						<Row className='form-group'>
							<Label htmlFor='rating' md={12}>
								Rating
							</Label>
							<Col md={12}>
								<Control.select
									id='rating'
									model='.rating'
									name='rating'
									className='form-control'
								>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
								</Control.select>
							</Col>
						</Row>
						<Row className='form-group'>
							<Label htmlFor='rating' md={12}>
								Your Name
							</Label>
							<Col md={12}>
								<Control.text
									model='.author'
									id='author'
									name='author'
									placeholder='Your Name'
									className='form-control'
									validators={{
										minLength: minLength(3),
										maxLength: maxLength(15),
									}}
								/>
								<Errors
									className='text-danger'
									model='.author'
									show='touched'
									messages={{
										minLength: 'Must be greater than 2 characters',
										maxLength: 'Must be 15 characters or less',
									}}
								/>
							</Col>
						</Row>
						<Row className='form-group'>
							<Label htmlFor='message' md={12}>
								Your Feedback
							</Label>
							<Col md={12}>
								<Control.textarea
									model='.message'
									id='message'
									name='message'
									rows='6'
									className='form-control'
								/>
							</Col>
						</Row>
						<Row className='form-group'>
							<Col md={{ size: 12 }}>
								<Button type='submit' color='primary'>
									Submit
								</Button>
							</Col>
						</Row>
					</LocalForm>
				</ModalBody>
			</Modal>
		);
	}
}
