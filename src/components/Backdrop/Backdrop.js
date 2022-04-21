import { Box } from '@chakra-ui/react';

const Backdrop = (props) =>
	props.show ? (
		<Box
			w='100%'
			h='100%'
			pos='fixed'
			zIndex={100}
			left={0}
			top={0}
			bg='#00000077'
			onClick={props.clicked}
		></Box>
	) : null;

export default Backdrop;
