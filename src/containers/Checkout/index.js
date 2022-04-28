import { Box } from '@chakra-ui/react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { useState } from 'react';

const Checkout = () => {
	const [ingredients, setIngredients] = useState({
		salad: 1,
		meat: 1,
		cheese: 1,
		bacon: 1,
	});

	return (
		<Box>
			<CheckoutSummary ingredients={ingredients} />
		</Box>
	);
};
export default Checkout;
