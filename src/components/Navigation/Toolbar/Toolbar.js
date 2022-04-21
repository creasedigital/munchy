import { Box } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = (props) => {
	return (
		<Box
			as='header'
			h='56px'
			w='100%'
			pos='fixed'
			top='0'
			left='0'
			bg='munchy.main'
			color='munchy.yellow'
			d='flex'
			justifyContent='space-between'
			alignItems='center'
			p='0 20px'
			boxSizing='border-box'
			zIndex={90}
		>
			<DrawerToggle clicked={props.drawerToggleClicked} />
			<Logo height='60%' />
			<Box
				as='nav'
				h='100%'
				sx={{
					'@media (max-width: 499px)': {
						display: 'none',
					},
				}}
			>
				<NavigationItems />
			</Box>
		</Box>
	);
};

export default Toolbar;
