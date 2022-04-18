import { Box } from '@chakra-ui/react';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((igKey) => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredient key={igKey + 1} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = <Box as='p'>Please start adding ingredients!</Box>;
	}
	return (
		<Box
			w={{ base: '100%', sm: '450px', md: '700px' }}
			margin='auto'
			h={{ base: '250px', sm: '400px', md: '600px' }}
			overflow='scroll'
			textAlign='center'
			fontWeight='bold'
			fontSize='1.2rem'
		>
			<BurgerIngredient type='bread-top' />
			{transformedIngredients}
			<BurgerIngredient type='bread-bottom' />
		</Box>
	);
};

export default Burger;
