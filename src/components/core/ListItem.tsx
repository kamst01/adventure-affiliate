import React from 'react';

type ListItemProps = React.ComponentPropsWithoutRef<'li'> & {
	className?: string;
	children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
	return (
		<li
			{...props}
			className='px-4 py-4 sm:px-0'
		/>
	);
};
