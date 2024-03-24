import React from 'react';

type TextProps = React.ComponentPropsWithoutRef<'p'> & {
	className?: string;
	children: React.ReactNode;
};

type StrongProps = React.ComponentPropsWithoutRef<'strong'> & {
	className?: string;
	children: React.ReactNode;
};

export const Text: React.FC<TextProps> = (props: TextProps) => {
	return (
		<p
			{...props}
			className='text-base leading-8 text-gray-600 sm:text-lg'
		/>
	);
};

export const Strong: React.FC<StrongProps> = (props: StrongProps) => {
	return (
		<strong
			{...props}
			className='font-semibold text-zinc-950 dark:text-white'
		/>
	);
};
