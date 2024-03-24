import React from 'react';

type SelectProps = React.forwardRef<'select'> & {
	options: Array<{ value: string; label: string }>;
	label?: string;
	name?: string;
	defaultValue?: string;
};

const Select: React.FC<SelectProps> = ({ defaultValue = 'Select', ...props }: SelectProps) => {
	const locationId = React.useId();
	return (
		<div>
			{props.label && (
				<label
					htmlFor={locationId}
					className='block text-sm font-medium leading-6 text-gray-900'
				>
					{props.label}
				</label>
			)}
			<select
				id={locationId}
				{...props}
				className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
				defaultValue={defaultValue}
			>
				<option value='null'>Select</option>
				{props.options.map((option: { value: string; label: string }) => (
					<option
						key={props.options.indexOf(option)}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
