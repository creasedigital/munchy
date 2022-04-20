import { List } from '@chakra-ui/react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
	return (
		<List
			m='0'
			p='0'
			listStyle='none'
			d='flex'
			flexFlow='column'
			alignItems='center'
			h='100%'
			sx={{
				'@media (min-width: 500px)': {
					flexFlow: 'row',
				},
			}}
		>
			<NavigationItem link='/' active>
				Burger Builder
			</NavigationItem>
			<NavigationItem link='/checkout'>Checkout</NavigationItem>
		</List>
	);
};
export default NavigationItems;
