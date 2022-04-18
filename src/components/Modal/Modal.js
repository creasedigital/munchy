import { Box } from '@chakra-ui/react';
import Auxilliary from '../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
	return (
		<Auxilliary>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<Box
				pos='fixed'
				zIndex={500}
				bg='white'
				w={{ base: '70%', md: '500px', lg: '70%' }}
				border='1px solid #ccc'
				boxShadow='1px 1px 1px black'
				p='16px'
				left={{ base: '15%', md: 'calc(50% - 250px)', lg: '15%' }}
				top='30%'
				boxSizing='border-box'
				transition='all 0.3s ease-out'
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0',
				}}
			>
				{props.children}
			</Box>
		</Auxilliary>
	);
};

export default Modal;
