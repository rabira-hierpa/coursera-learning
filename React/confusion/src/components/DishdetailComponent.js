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
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dish }) {
	if (dish) {
		return (
			<div>
				<FadeTransform
					in
					tranfromProps={{
						exitTransform: 'scale(0.5) translateY(-50%)',
					}}
				>
					<Card key={dish.id}>
						<CardImg
							top
							width='100%'
							src={baseUrl + dish.image}
							alt={dish.name}
						/>
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</FadeTransform>
			</div>
		);
	} else {
		return <div></div>;
	}
}

const RenderComments = ({ comments, postComment, dishId }) => {
	if (comments.length) {
		return (
			<div>
				<ul className='list-group list-group-flush'>
					<Stagger in>
						{comments.map((comment) => {
							return (
								<Fade in>
									<li key={comment.id} className='list-group-item'>
										<p>{comment.comment}</p>
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
								</Fade>
							);
						})}
					</Stagger>
				</ul>
				<CommentForm dishId={dishId} postComment={postComment} />
			</div>
		);
	} else {
		return <div></div>;
	}
};

const DishDetail = (props) => {
	if (props.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<Loading />
				</div>
			</div>
		);
	} else if (props.errMess) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	} else if (props.dish != null)
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
							<RenderComments
								comments={props.comments}
								postComment={props.postComment}
								dishId={props.dish.id}
							/>
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
		this.props.postComment(
			this.props.dishId,
			values.rating,
			values.author,
			values.comment
		);
		this.toggleModal();
	};
	render() {
		return (
			<React.Fragment>
				<Button outline className='mt-5' onClick={this.toggleModal}>
					<i className='fa fa-pencil fa-lg mr-2'></i>Submit Comment
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.state.toggleModal}>
						Submit Comment
					</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={this.handleSubmit}>
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
										model='.comment'
										id='comment'
										name='comment'
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
