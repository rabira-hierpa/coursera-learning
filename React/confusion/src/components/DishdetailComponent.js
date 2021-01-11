import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Moment from 'moment';
export default class DishdetailComponent extends Component {
	renderDish(dish = this.props.dish) {
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

	renderComments(comments = this.props.dish.comments) {
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
	}

	render() {
		return (
			<div className='row'>
				<div className='col-lg-5 col-sm-12 m-1'>{this.renderDish()}</div>
				<div className='col-lg-5 col-md-5 col-sm-12 m-1'>
					<div>
						<h4>Comments </h4>
						{this.renderComments()}
					</div>
				</div>
			</div>
		);
	}
}
