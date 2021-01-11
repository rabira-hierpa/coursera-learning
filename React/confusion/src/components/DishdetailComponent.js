import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
export default class DishdetailComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null,
		};
		this.props = props.dish;
	}

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

	renderComments(comments) {
		if (comments) {
			<div>
				<h4>Comments Sections</h4>
			</div>;
		} else {
			return <div></div>;
		}
	}

	render() {
		return (
			<div className='row'>
				<div className='col-lg-5 col-sm-12 m-1'>{this.renderDish()}</div>
				<div className='col-lg-5 col-md-5 col-sm-12 m-1'>
					<h2>Comments sections</h2>
				</div>
			</div>
		);
	}
}
