import { Link, ListItem } from '@chakra-ui/react';
import './NavItem.css';
const NavigationItem = (props) => {
	return (
		<ListItem
			m={0}
			boxSizing='border-box'
			d='flex'
			h='100%'
			alignItems='center'
		>
			<Link
				href={props.link}
				className={props.active && 'active'}
				color='munchy.yellow'
				textDecoration='none'
				h='100%'
				p='16px 10px'
				borderBottom='4px solid transparent'
				boxSizing='border-box'
				d='block'
				css={{
					'.active, :hover, :active': {
						backgroundColor: '#8F5C2C',
						borderBottom: '4px solid #ff5555',
						color: 'munchy.red',
					},
				}}
			>
				{props.children}
			</Link>
		</ListItem>
	);
};
export default NavigationItem;
