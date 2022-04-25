import { useState } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/Modal/Modal';
import Auxilliary from '../../hoc/Auxilliary';
import axios from '../../axios-orders';
import Loader from '../../components/Loader/Loader';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

const BurgerBuilder = () => {
	const [ingredients, setIngredients] = useState({
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
	});
	const [totalPrice, setTotalPrice] = useState(4);
	const [purchasable, setPurchasable] = useState(false);
	const [purchasing, setPurchasing] = useState(false);
	const [loading, setLoading] = useState(false);

	const updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		setPurchasable({ purchasable: sum > 0 });
	};

	const addIngredientHandler = (type) => {
		const oldCount = ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = totalPrice;
		const newPrice = oldPrice + priceAddition;
		setIngredients(updatedIngredients);
		setTotalPrice(newPrice);
		updatePurchaseState(updatedIngredients);
	};

	const removeIngredientHandler = (type) => {
		const oldCount = ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = totalPrice;
		const newPrice = oldPrice - priceDeduction;
		setIngredients(updatedIngredients);
		setTotalPrice(newPrice);
		updatePurchaseState(updatedIngredients);
	};

	const disabledInfo = { ...ingredients };
	for (let key in disabledInfo) {
		disabledInfo[key] = disabledInfo[key] <= 0;
	}

	const purchaseHandler = () => {
		setPurchasing(true);
	};

	const purchaseCancelHandler = () => {
		setPurchasing(false);
	};

	const purchaseContinueHandler = () => {
		// alert('Continue purchase!');
		setLoading(true);
		const order = {
			ingredients,
			price: totalPrice,
			customer: {
				name: 'King Austin',
				address: {
					street: '3 Und Str.',
					zipCode: '900107',
					country: 'Nigeria',
				},
				email: 'ojorechris@gmail.com',
			},
			deliveryMethod: 'fastest',
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
				setLoading(false);
				setPurchasing(false);
				console.log(response);
			})
			.catch((err) => {
				setLoading(false);
				setPurchasing(false);
				console.log(err);
			});
	};

	let orderSummary = (
		<OrderSummary
			ingredients={ingredients}
			price={totalPrice}
			purchaseCancelled={purchaseCancelHandler}
			purchaseContinued={purchaseContinueHandler}
		/>
	);

	if (loading) {
		orderSummary = <Loader />;
	}

	return (
		<Auxilliary>
			<Modal show={purchasing} modalClosed={purchaseCancelHandler}>
				{orderSummary}
			</Modal>
			<Burger ingredients={ingredients} />
			<BuildControls
				ingredientsAdded={addIngredientHandler}
				ingredientsRemoved={removeIngredientHandler}
				disabled={disabledInfo}
				price={totalPrice}
				purchasable={purchasable}
				ordered={purchaseHandler}
			/>
		</Auxilliary>
	);
};

export default BurgerBuilder;
