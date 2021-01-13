import React, { Component } from 'react';
import {
	Card,
	CardBody,
	CardImg,
	CardImgOverlay,
	CardText,
	CardTitle,
} from 'reactstrap';

export default class MenuComponent extends Component {
	componentDidMount() {
		console.log('Menu componentDidMount() invoked');
	}

	componentDidUpdate() {
		console.log('Menu componentDidUpdate() invoked');
	}
	renderDish(dish) {
		if (dish != null) {
			return (
				<Card>
					<CardImg width='100%' src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return <div></div>;
		}
	}

	render() {
		console.log('Menu Componet render() invoked');
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className='col-12 col-md-5 m-1'>
					<Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
						<CardImg width='100%' src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});
		return (
			<div className='container'>
				<div className='row'>{menu}</div>
			</div>
		);
	}
}
