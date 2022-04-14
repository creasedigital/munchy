import { Box } from '@chakra-ui/react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
	return (
		<Box
			w='100%'
			bg='munchy.yellow'
			d='flex'
			flexDirection='column'
			alignItems='center'
			boxShadow='sm'
			margin='auto'
			p='10px 0'
		>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientsAdded(ctrl.type)}
					removed={() => props.ingredientsRemoved(ctrl.type)}
				/>
			))}
		</Box>
	);
};

export default BuildControls;
