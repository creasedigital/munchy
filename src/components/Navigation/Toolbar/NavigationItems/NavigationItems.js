import { List } from '@chakra-ui/react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
	return (
		<List m='0' p='0' listStyle='none' d='flex' alignItems='center' h='100%'>
			<NavigationItem link='/' active={true}>
				Burger Builder
			</NavigationItem>
			<NavigationItem link='/checkout'>Checkout</NavigationItem>
		</List>
	);
};
export default NavigationItems;
