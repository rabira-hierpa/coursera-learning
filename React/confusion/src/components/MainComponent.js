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
import {
	postComment,
	fetchDishes,
	fetchComments,
	fetchPromos,
	fetchLeaders,
	postFeedback,
} from '../redux/ActionCreateros';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
	postComment: (dishId, raiting, author, comment) =>
		dispatch(postComment(dishId, raiting, author, comment)),
	fetchDishes: () => {
		dispatch(fetchDishes());
	},
	resetFeedbackForm: () => {
		dispatch(actions.reset('feedback'));
	},
	fetchComments: () => dispatch(fetchComments()),
	fetchPromos: () => {
		dispatch(fetchPromos());
	},
	fetchLeaders: () => {
		dispatch(fetchLeaders());
	},
	postFeedback: (firstName, lastName, contactTel, email, message) =>
		dispatch(postFeedback(firstName, lastName, contactTel, email, message)),
});

class Main extends Component {
	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
		this.props.fetchLeaders();
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errMess}
					promotion={
						this.props.promotions.promotions.filter(
							(promo) => promo.featured
						)[0]
					}
					promosLoading={this.props.promotions.isLoading}
					promosErrMess={this.props.promotions.errMess}
					leader={
						this.props.leaders.leaders.filter((leader) => leader.featured)[0]
					}
					leaderLoading={this.props.leaders.isLoading}
					leadersErrMess={this.props.leaders.errMess}
				/>
			);
		};

		const DishWithId = ({ match }) => {
			console.log(this.props.comments);
			return (
				<DishDetail
					dish={
						this.props.dishes.dishes.filter(
							(dish) => dish.id === parseInt(match.params.dishId, 10)
						)[0]
					}
					isLoading={this.props.dishes.isLoading}
					errMess={this.props.dishes.errmess}
					comments={this.props.comments.comments.filter(
						(comment) => comment.dishId === parseInt(match.params.dishId, 10)
					)}
					commentsErrMess={this.props.comments.errMess}
					postComment={this.props.postComment}
				/>
			);
		};
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames='page'
						timeout={300}
					>
						<Switch>
							<Route path='/home' component={HomePage} />
							<Route
								exact
								path='/contactus'
								component={() => (
									<Contact
										resetFeedbackForm={this.props.resetFeedbackForm}
										postFeedback={this.props.postFeedback}
									/>
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
								component={() => (
									<AboutUs
										leaders={this.props.leaders}
										leaderLoading={this.props.leaders.isLoading}
										leaderErrMess={this.props.leaders.errMess}
									/>
								)}
							/>
							<Redirect to='/home' />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

// ! Make sure to add both mapStateToProps and mapDispatchToProps
// ! to the connect function
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
