import React, { ReactNode } from 'react';

type ContainerProps = React.ComponentPropsWithoutRef<'section'> & {
	children?: ReactNode;
};

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
	return <section {...props} className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8' />;
};

export default Container;
