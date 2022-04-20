import { Box, Image } from '@chakra-ui/react';
import munchyLogo from '../../assets/logo@4x.png';

const Logo = () => {
	return (
		<Box bg='white' p='8px' h='80%' borderRadius='5px' boxSizing='border-box'>
			<Image src={munchyLogo} alt='Logo' h='100%' />
		</Box>
	);
};

export default Logo;
