import { Box } from '@chakra-ui/react';
import Auxilliary from '../../hoc/Auxilliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
	return (
		<Auxilliary>
			<Toolbar />
			<SideDrawer />
			<Box as='main' marginTop='72px'>
				{props.children}
			</Box>
		</Auxilliary>
	);
};

export default Layout;
