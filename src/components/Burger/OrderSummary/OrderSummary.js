import { Box, Heading, List, ListItem } from '@chakra-ui/react';
import Auxilliary from '../../../hoc/Auxilliary';

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<ListItem key={igKey}>
				<Box as='span' textTransform='capitalize'>
					{igKey}
				</Box>
				: {props.ingredients[igKey]}
			</ListItem>
		);
	});
	return (
		<Auxilliary>
			<Heading as='h3'>Your Order</Heading>
			<Box as='p'>A delicious burgerwith the following ingredients:</Box>
			<List>{ingredientSummary}</List>
			<Box as='p'>Continue to checkout this order?</Box>
		</Auxilliary>
	);
};

export default OrderSummary;
