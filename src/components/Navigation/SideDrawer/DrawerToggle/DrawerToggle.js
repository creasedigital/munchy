import { Box } from '@chakra-ui/react';

const DrawerToggle = (props) => {
	return (
		<Box
			onClick={props.clicked}
			width='40px'
			height='100%'
			display='flex'
			flexFlow='column'
			justifyContent='space-around'
			alignItems='center'
			padding='10px 0'
			boxSizing='border-box'
			cursor='pointer'
			sx={{
				'@media (min-width: 500px)': {
					display: 'none',
				},
			}}
		>
			<Box
				width='90%'
				height='3px'
				borderRadius='2px'
				backgroundColor='white'
			></Box>
			<Box
				width='90%'
				height='3px'
				borderRadius='2px'
				backgroundColor='white'
			></Box>
			<Box
				width='90%'
				height='3px'
				borderRadius='2px'
				backgroundColor='white'
			></Box>
		</Box>
	);
};
export default DrawerToggle;
