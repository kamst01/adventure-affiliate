import React, { ChangeEvent, useId } from 'react';

type InputProps = {
	label?: string;
	type: string;
	placeholder?: string;
	name?: string;
	form?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
};

export const Input: React.FC<InputProps> = (
	props: InputProps & React.InputHTMLAttributes<HTMLInputElement>
) => {
	const inputId = useId();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.onChange?.(event);
	};

	return (
		<>
			{props.label && (
				<label
					htmlFor={inputId}
					className='block text-sm font-medium leading-6 text-gray-900'
				>
					{props.label}
				</label>
			)}
			<div className={props.label ? 'mt-2' : ''}>
				<input
					{...props}
					id={inputId}
					onChange={handleChange}
					className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				/>
			</div>
		</>
	);
};
