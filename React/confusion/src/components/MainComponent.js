import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import AboutUs from './AboutusComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreateros';
import { actions } from 'react-redux-form';
// - When retriving state from the store
// - use mapStateToProps

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

// - When adding an action to a dispath
// - use mapDispatchToProps

const mapDispatchToProps = (dispatch) => ({
	addComment: (dishId, raiting, author, comment) =>
		dispatch(addComment(dishId, raiting, author, comment)),
	fetchDishes: () => {
		dispatch(fetchDishes());
	},
	resetFeedbackForm: () => {
		dispatch(actions.reset('feedback'));
	},
});

class Main extends Component {
	componentDidMount() {
		this.props.fetchDishes();
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errMess}
					promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};

		const DishWithId = ({ match }) => {
			return (
				<DishDetail
					dish={
						this.props.dishes.dishes.filter(
							(dish) => dish.id === parseInt(match.params.dishId, 10)
						)[0]
					}
					isLoading={this.props.dishes.isLoading}
					errMess={this.props.dishes.errmess}
					comments={this.props.comments.filter(
						(comment) => comment.dishId === parseInt(match.params.dishId, 10)
					)}
					addComment={this.props.addComment}
				/>
			);
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route
						exact
						path='/contactus'
						component={() => (
							<Contact resetFeedbackForm={this.props.resetFeedbackForm} />
						)}
					/>
					<Route
						exact
						path='/menu'
						component={() => <Menu dishes={this.props.dishes} />}
					/>
					<Route path='/menu/:dishId' component={DishWithId} />
					<Route
						exact
						path='/about'
						component={() => <AboutUs leaders={this.props.leaders} />}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

// ! Make sure to add both mapStateToProps and mapDispatchToProps
// ! to the connect function
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
