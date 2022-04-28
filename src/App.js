import { Box, Flex } from '@chakra-ui/react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Box>
			<Layout>
				<Routes>
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/' exact element={<BurgerBuilder />} />
				</Routes>
			</Layout>
		</Box>
	);
}

export default App;
