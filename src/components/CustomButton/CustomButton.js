import { Button } from '@chakra-ui/react';
const CustomButton = (props) => {
	if (props.btnType) {
		switch (props.btnType) {
			case 'success':
				return '#5C9210';
				break;
			case 'danger':
				return '#944317';
				break;
			default:
				return 'white';
		}
	}
	return (
		<Button
			onClick={props.clicked}
			bg='transparent'
			border='none'
			color={props.btnType}
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
};

export default CustomButton;
