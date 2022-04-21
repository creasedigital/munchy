import { Box, Button } from '@chakra-ui/react';
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
			<Box as='p'>
				Current Price: <strong>{props.price.toFixed(2)}</strong>
			</Box>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					added={() => props.ingredientsAdded(ctrl.type)}
					removed={() => props.ingredientsRemoved(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<Button
				disabled={!props.purchasable}
				onClick={props.ordered}
				bg='munchy.red'
				outline='none'
				cursor='pointer'
				border='1px solid'
				borderColor='munchy.main'
				color='munchy.main'
				fontFamily='inherit'
				fontSize='1.2em'
				p='15px 30px'
				boxShadow='2px 2px 2px #000000'
				css={{
					':hover, :active': {
						background: '#A0DB41',
						border: '1px solid ',
						borderColor: 'munchy.main',
						color: 'munchy.main',
					},
					':disabled': {
						background: '#C7C6C6',
						cursor: 'notAllowed',
						border: '1px solid ',
						borderColor: '#cccccc',
						color: '#888888',
					},
					'@keyframes enable': {
						'0%': {
							transform: 'scale(1)',
						},
						'60%': {
							transform: 'scale(1.1)',
						},
						'100%': {
							transform: 'scale(1)',
						},
					},
					':not(:disabled)': {
						animation: 'enable 0.3s linear',
					},
				}}
			>
				ORDER NOW
			</Button>
		</Box>
	);
};

export default BuildControls;
