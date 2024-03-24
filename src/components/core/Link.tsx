import React from 'react';

const Link = React.forwardRef(function Link(
	props: { href?: string } & React.ComponentPropsWithoutRef<'a'>,
	ref: React.ForwardedRef<HTMLAnchorElement>
) {
	return (
		<a
			{...props}
			ref={ref}
		/>
	);
});

export default Link;