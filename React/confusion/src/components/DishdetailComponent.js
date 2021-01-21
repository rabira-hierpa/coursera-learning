import React from 'react';
import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	BreadcrumbItem,
	Breadcrumb,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Row,
	Label,
	Col,
} from 'reactstrap';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function RenderDish({ dish }) {
	if (dish) {
		return (
			<div>
				<Card key={dish.id}>
					<CardImg width='100%' src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	} else {
		return <div></div>;
	}
}

const RenderComments = ({ comments }) => {
	if (comments.length) {
		return (
			<div>
				{comments.map((comment) => {
					return (
						<ul key={comment.id} className='list-group list-group-flush'>
							<li className='list-group-item'>
								{comment.comment}
								<div>
									{'-- ' +
										comment.author +
										' , ' +
										Moment(comment.date).format('MMM DD, YYYY')}
									{/* or you can use the following format (pure JS formatting)
											{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
										*/}
								</div>
							</li>
						</ul>
					);
				})}
				<CommentForm />
			</div>
		);
	} else {
		return <div></div>;
	}
};

const DishDetail = (props) => {
	return (
		<React.Fragment>
			<div className='container'>
				<div className='row'>
					<Breadcrumb>
						{/* <BreadcrumbItem>
								<Link to='/home'>Home</Link>
							</BreadcrumbItem> */}
						<BreadcrumbItem>
							<Link to='/menu'>Menu</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className='col-12'>
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-5 col-sm-12 m-1'>
						<RenderDish dish={props.dish} />
					</div>
					<div className='col-lg-5 col-md-5 col-sm-12 m-1'>
						<h4>Comments </h4>
						<RenderComments comments={props.comments} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
		};
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}

	handleSubmit = (values) => {
		console.log('Current State is: ' + JSON.stringify(values));
		alert('Current State is: ' + JSON.stringify(values));
		this.toggleModal();
	};
	render() {
		return (
			<React.Fragment>
				<Button outline className='mt-5' onClick={this.toggleModal}>
					<i class='fa fa-pencil fa-lg mr-2'></i>Submit Comment
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.state.toggleModal}>
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
			</React.Fragment>
		);
	}
}

export default DishDetail;
