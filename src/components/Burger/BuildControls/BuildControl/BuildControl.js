import { Box, Button } from '@chakra-ui/react';

const BuildControl = (props) => {
	return (
		<Box d='flex' justify='space-between' align='center' m='5px 0'>
			<Box p='10px' fontWeight='bold' w='80px'>
				{props.label}
			</Box>
			<Button
				d='block'
				font='inherit'
				p='5px'
				m='0 5px'
				w='80px'
				border='1px solid'
				borderColor='munchy.main'
				cursor='pointer'
				outline='none'
				bg='munchy.main'
				color='white'
				css={{
					':hover': { background: '#AC9980' },
					':disabled': {
						background: '#ac9980',
						border: '1px solid #7E7365',
						color: '#cccccc',
					},
					':hover:disabled': {
						cursor: 'notAllowed',
					},
				}}
				_active={{ background: '#DAA972' }}
				onClick={props.removed}
				disabled={props.disabled}
			>
				Less
			</Button>
			<Button
				d='block'
				font='inherit'
				p='5px'
				m='0 5px'
				w='80px'
				border='1px solid'
				borderColor='munchy.main'
				cursor='pointer'
				outline='none'
				bg='munchy.red'
				color='white'
				_active={{ background: '#DAA972' }}
				css={{
					':hover': { background: '#AA6817' },
					':disabled': {
						background: '#ac9980',
						border: '1px solid #7E7365',
						color: '#cccccc',
					},
					':hover:disabled': {
						cursor: 'notAllowed',
					},
				}}
				onClick={props.added}
			>
				More
			</Button>
		</Box>
	);
};

export default BuildControl;
