import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import Auxilliary from '../../../hoc/Auxilliary';
import CustomButton from '../../CustomButton/CustomButton';

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
			<Box as='p'>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</Box>
			<Box as='p'>Continue to checkout this order?</Box>
			<Flex>
				<CustomButton clicked={props.purchaseCancelled} btnType='danger'>
					CANCEL
				</CustomButton>
				<CustomButton clicked={props.purchaseContinued} btnType='success'>
					BUY
				</CustomButton>
			</Flex>
		</Auxilliary>
	);
};

export default OrderSummary;
