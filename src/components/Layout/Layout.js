import { Box } from '@chakra-ui/react';
import Auxilliary from '../../hoc/Auxilliary';

const Layout = (props) => {
	return (
		<Auxilliary>
			<div>Toolbar, SideDrawer, Backdrop</div>
			<Box as='main' marginTop={4}>
				{props.children}
			</Box>
		</Auxilliary>
	);
};

export default Layout;
