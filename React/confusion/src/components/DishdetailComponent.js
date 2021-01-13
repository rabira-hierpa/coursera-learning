import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Moment from 'moment';

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
						<ul class='list-group list-group-flush'>
							<li key={comment.id} class='list-group-item'>
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
			</div>
		);
	} else {
		return <div></div>;
	}
};

const DishDetail = (props) => {
	return (
		<div className='row'>
			<div className='col-lg-5 col-sm-12 m-1'>
				<RenderDish dish={props.dish} />
			</div>
			<div className='col-lg-5 col-md-5 col-sm-12 m-1'>
				<h4>Comments </h4>
				<RenderComments comments={props.dish.comments} />
			</div>
		</div>
	);
};

export default DishDetail;
