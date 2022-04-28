import { Box } from '@chakra-ui/react';
import Burger from '../../Burger/Burger';
import CustomButton from '../../CustomButton/CustomButton';

const CheckoutSummary = (props) => {
	return (
		<Box
			textAlign='center'
			w='80%'
			mx='auto'
			css={{
				'@media(min-width: 600px)': {
					width: '500px',
				},
			}}
		>
			<h1>We hope it tastes nice!</h1>
			<Box w='100%' m='auto' minHeight='300px'>
				<Burger ingredients={props.ingredients} />
			</Box>
			<Box>
				<CustomButton btnType='danger' clicked>
					CANCEL
				</CustomButton>
				<CustomButton btnType='success' clicked>
					CONTINUE
				</CustomButton>
			</Box>
		</Box>
	);
};
export default CheckoutSummary;
