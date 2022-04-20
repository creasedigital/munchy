import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Auxilliary from '../../hoc/Auxilliary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
	const [showSideDrawer, setShowSideDrawer] = useState(false);
	const sideDrawerClosedHandler = () => {
		setShowSideDrawer(!showSideDrawer);
	};

	return (
		<Auxilliary>
			<Toolbar />
			<SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
			<Box as='main' marginTop='72px'>
				{props.children}
			</Box>
		</Auxilliary>
	);
};

export default Layout;
