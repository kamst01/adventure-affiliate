import React, { useState } from 'react';
import { Button } from './Button';

type SwitchProps = React.ComponentPropsWithoutRef<'button'> & {
	label: string;
};

const buttonClassNames =
	'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm';

const switchClasses =
	'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out';

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
	const [isSwitched, setSwitch] = useState(false);
	return (
		<Button
			role='switch'
			onClick={() => setSwitch(!isSwitched)}
			className={`${buttonClassNames} ${isSwitched ? 'bg-green-500' : 'bg-gray-200'}`}
		>
			<span className='sr-only'>Use {props.label}</span>
			<span
				aria-hidden='true'
				className={`${switchClasses} ${isSwitched ? 'translate-x-5' : 'translate-x-0'}`}
			></span>
		</Button>
	);
};

export default Switch;
