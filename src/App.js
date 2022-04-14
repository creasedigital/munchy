import { Box, Flex } from '@chakra-ui/react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

function App() {
	return (
		<Box>
			<Layout>
				<BurgerBuilder />
			</Layout>
		</Box>
	);
}

export default App;
