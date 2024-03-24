import { ReactNode, FC } from 'react';

type HeadingProps = {
	element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
	children: ReactNode;
};

// Map heading types to their respective Tailwind CSS classes
const headingClassNames: Record<string, string> = {
	h1: 'text-5xl sm:text-6xl',
	h2: 'text-4xl sm:text-5xl',
	h3: 'text-3xl sm:text-4xl',
	h4: 'text-2xl sm:text-3xl',
	h5: 'text-xl sm:text-2xl',
	h6: 'text-lg sm:text-xl',
};

export const Heading: FC<HeadingProps> = (props: HeadingProps) => {
	const mandatoryClassNames = 'font-bold tracking-tight text-gray-900 transition-all duration-150 ease-linear';
	const combinedClassNames = `${headingClassNames[props.element]} ${mandatoryClassNames} ${props.className}`;
	const HeadingTag = props.element;

	return <HeadingTag className={combinedClassNames}>{props.children}</HeadingTag>;
};
