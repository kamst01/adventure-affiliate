import React from 'react';
import { Link as RouterLink, type To } from 'react-router-dom';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & (
	| { href: string; to?: never }
	| { href?: never; to: To }
	| { href?: never; to?: never }
) & {
	ref: React.ForwardedRef<HTMLAnchorElement>;
};

export const Link = React.forwardRef(function Link(props: LinkProps) {
	return props.to ? (
		<RouterLink {...props} />
	) : (
		<a {...props} />
	);
});
