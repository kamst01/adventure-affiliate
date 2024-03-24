import React from 'react';

type ListProps = React.ComponentPropsWithoutRef<'ul'> & {
	className?: string;
	children?: React.ReactNode;
};

export const List: React.FC<ListProps> = (props: ListProps) => {
	return (
		<>
			<ul
				{...props}
				className='divide-y divide-gray-200'
			/>
		</>
	);
};
