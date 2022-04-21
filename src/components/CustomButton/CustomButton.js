import { Button } from '@chakra-ui/react';
const CustomButton = (props) => {
	switch (props.btnType) {
		case 'success':
			return (
				<Button
					onClick={props.clicked}
					bg='transparent'
					border='none'
					color='#5C9210'
					outline='none'
					cursor='pointer'
					font='inherit'
					padding='10px'
					margin='10px'
					fontWeight='bold'
					css={{
						':first-of-type': {
							marginLeft: '0',
							paddingLeft: '0',
						},
					}}
				>
					{props.children}
				</Button>
			);
			break;
		case 'danger':
			return (
				<Button
					onClick={props.clicked}
					bg='transparent'
					border='none'
					color='#944317'
					outline='none'
					cursor='pointer'
					font='inherit'
					padding='10px'
					margin='10px'
					fontWeight='bold'
					css={{
						':first-of-type': {
							marginLeft: '0',
							paddingLeft: '0',
						},
					}}
				>
					{props.children}
				</Button>
			);
			break;
		default:
			return (
				<Button
					onClick={props.clicked}
					bg='transparent'
					border='none'
					color='white'
					outline='none'
					cursor='pointer'
					font='inherit'
					padding='10px'
					margin='10px'
					fontWeight='bold'
					css={{
						':first-of-type': {
							marginLeft: '0',
							paddingLeft: '0',
						},
					}}
				>
					{props.children}
				</Button>
			);
	}
};

export default CustomButton;
