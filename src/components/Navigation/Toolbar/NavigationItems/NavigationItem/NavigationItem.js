import { Link, ListItem } from '@chakra-ui/react';
const NavigationItem = (props) => {
	return (
		<ListItem
			m='10px 0'
			boxSizing='border-box'
			d='block'
			w='100%'
			alignItems='center'
			sx={{
				'@media (min-width: 500px)': {
					margin: '0px',
					display: 'flex',
					height: '100%',
					width: 'auto',
					alignItems: 'center',
				},
			}}
		>
			<Link
				href={props.link}
				className={props.active && 'active'}
				color='munchy.main'
				textDecoration='none'
				w='100%'
				boxSizing='border-box'
				d='block'
				sx={{
					'&.active': {
						color: 'munchy.red',
					},
					'@media (min-width: 500px)': {
						color: 'munchy.yellow',
						backgroundColor: '#8F0000',
						height: '100%',
						padding: '16px 10px',
						borderBottom: '4px solid transparent',
					},
				}}
				css={{
					':hover, :active': {
						backgroundColor: '#8F5C2C',
						borderBottom: '4px solid #ff5555',
						color: 'munchy.red',
						textDecoration: 'none',
					},
				}}
			>
				{props.children}
			</Link>
		</ListItem>
	);
};
export default NavigationItem;
