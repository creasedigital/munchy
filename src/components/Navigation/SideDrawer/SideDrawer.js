import { Box } from '@chakra-ui/react';
import Auxilliary from '../../../hoc/Auxilliary';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import Backdrop from '../../Backdrop/Backdrop';

const SideDrawer = (props) => {
	return (
		<Auxilliary>
			<Backdrop show={props.open} clicked={props.closed} />
			<Box
				ClassName={props.open ? 'open' : 'closed'}
				pos='fixed'
				w='280px'
				maxWidth='70%'
				h='100%'
				left='0'
				top='0'
				zIndex='200'
				bgColor='white'
				color='munchy.main'
				p='32px 16px'
				boxSizing='border-box'
				transition='transform 0.3s ease-out'
				css={{
					'@media (min-width: 500px)': {
						display: 'none',
					},
					'&.open': {
						transform: 'translateX(0)',
					},
					'&.close': {
						transform: 'translateX(-100%)',
					},
				}}
			>
				<Box mb={8} w='50%'>
					<Logo height='11%' />
				</Box>
				<Box as='nav'>
					<NavigationItems />
				</Box>
			</Box>
		</Auxilliary>
	);
};
export default SideDrawer;
