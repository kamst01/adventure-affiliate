import React from 'react';
import { Link } from '@/components/core/Link';

type ButtonProps = React.ComponentPropsWithoutRef<typeof Link> &
	React.ComponentPropsWithoutRef<'button'> &
	(
		| { outline: true; plain?: never }
		| { outline?: never; plain: true }
		| { outline?: never; plain?: never }
	) & {
		loading?: boolean;
		disabled?: boolean;
		buttonType?: 'button' | 'submit' | 'reset';
		role?: string;
		size?: keyof typeof styles.size;
		className?: string;
		children: React.ReactNode;
	};

const styles = {
	base: [
		// minimum
		'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold transition-all duration-200 ease-linear',
		// focus state
		'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
		// disabled state
		'disabled:opacity-50',
	],
	solid: 'border-transparent bg-blue-500 text-white hover:bg-blue-500/90 drop-shadow shadow-inner',
	plain: 'border-transparent text-gray-950 active:bg-gray-950/5 hover:bg-gray-950/5',
	outline: 'border-blue-950/10 text-blue-950 active:bg-blue-950/5 hover:bg-blue-950/5',
	size: {
		sm: 'px-2 py-1',
		base: 'px-2.5 py-1.5',
		lg: 'px-3 py-2',
		xl: 'px-3.5 py-2.5',
	},
};

export const Button = React.forwardRef(function Button(
	{ children, buttonType = 'button', size = 'base', ...props }: ButtonProps,
	ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
	const combinedClassNames = `${[...styles.base]} ${
		props.outline ? styles.outline : props.plain ? styles.plain : styles.solid
	} ${styles.size[size]}`;

	return 'href' in props || 'to' in props ? (
		<Link
			{...props}
			className={combinedClassNames}
			ref={ref as React.ForwardedRef<HTMLAnchorElement>}
		>
			{children}
		</Link>
	) : (
		<button
			{...props}
			type={buttonType}
			className={combinedClassNames}
			ref={ref as React.ForwardedRef<HTMLButtonElement>}
		>
			{children}
		</button>
	);
});
