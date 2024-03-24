import React from 'react';
import { Button } from '@/components/core/Button';

enum Alignment {
	start,
	end,
}

enum Placement {
	top,
	right,
	bottom,
	left,
}

enum Action {
	openDropdown,
	closeDropdown,
}

type AnchorPositionProps = {
	gap: string;
	offset: string;
	padding: string;
};

type AnchorProps = Partial<
	AnchorPositionProps & {
		to: keyof typeof Alignment | keyof typeof Placement;
	}
>;

type DropdownProviderProps = {
	children: React.ReactNode;
};

type DropdownProps = React.ComponentPropsWithoutRef<'div'> & {
	className?: string;
	children: React.ReactNode;
};

type DropdownButtonProps = React.ComponentProps<typeof Button> & {
	className?: string;
	children: React.ReactNode;
};

type DropdownMenuProps = React.ComponentPropsWithoutRef<'div'> & {
	className?: string;
	children: React.ReactNode;
	anchor?: AnchorProps;
	static?: boolean;
	size?: keyof typeof styles.size;
};

type DropdownMenuItemsProps = React.ComponentPropsWithoutRef<'div'> & {
	className?: string;
	children: React.ReactNode;
	anchor?: AnchorProps;
};

type DropdownMenuItemProps = React.ComponentProps<typeof Button> & {
	className?: string;
	children: React.ReactNode;
};

const styles = {
	base: 'bg-white/75 backdrop-blur-xl isolate rounded-xl p-1 overflow-y-auto',
	size: {
		xs: 'w-max',
		sm: 'sm:max-w-sm',
		md: 'sm:max-w-md',
		lg: 'sm:max-w-lg',
		xl: 'sm:max-w-xl',
	},
	text: 'text-left text-base/6 text-zinc-950 sm:text-sm/6',
	shadows: 'shadow-lg ring-1 ring-zinc-950/10',
	disabled: '',
	// grid layout - possible subgrid
	layout: 'supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]',
};

const DropdownContext = React.createContext<{
	state: Action;
	setState: React.Dispatch<React.SetStateAction<Action>>;
}>({
	state: Action.closeDropdown,
	setState: () => {},
});

const DropdownProvider: React.FC<DropdownProviderProps> = ({ children }) => {
	const [state, setState] = React.useState(Action.closeDropdown);

	return <DropdownContext.Provider value={{ state, setState }}>{children}</DropdownContext.Provider>;
};

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
	return (
		<DropdownProvider>
			<div {...props} />
		</DropdownProvider>
	);
};

export const DropdownButton: React.FC<DropdownButtonProps> = (props: DropdownButtonProps) => {
	const { state, setState } = React.useContext(DropdownContext);

	return (
		<Button
			{...props}
			onClick={() => setState(state === Action.openDropdown ? Action.closeDropdown : Action.openDropdown)}
		/>
	);
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ size = 'xs', ...props }: DropdownMenuProps) => {
	const { state } = React.useContext(DropdownContext);
	const hidden = state === Action.closeDropdown ? 'hidden' : 'supports-[grid-template-columns:subgrid]:grid';
	const classes = `${hidden} ${styles.size[size]} ${Object.entries(styles)
		.filter(([key, value]) => key !== 'size' && value !== '')
		.map(([, value]) => value)
		.join(' ')}`;

	return (
		<div
			{...props}
			className={classes}
		/>
	);
};

export const DropdownMenuItems: React.FC<DropdownMenuItemsProps> = (props: DropdownMenuItemsProps) => {
	return <div {...props} />;
};

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = (props: DropdownMenuItemProps) => {
	return <Button plain {...props} />;
};
