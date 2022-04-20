import { Box } from '@chakra-ui/react';
import Auxilliary from '../../hoc/Auxilliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
	return (
		<Auxilliary>
			<Toolbar />
			<Box as='main' marginTop='72px'>
				{props.children}
			</Box>
		</Auxilliary>
	);
};

export default Layout;
