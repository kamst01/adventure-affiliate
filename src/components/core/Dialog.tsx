import React from 'react';
import { Heading } from '@/components/core/Heading';
import { Text } from '@/components/core/Text';
import { Button } from '@/components/core/Button';

enum DialogAction {
	open,
	close,
}

type DialogProps = React.ComponentPropsWithoutRef<'div'> & {
	className?: string;
	children: React.ReactNode;
};

type DialogWindowProps = React.ComponentPropsWithoutRef<'dialog'> &
	React.ComponentPropsWithoutRef<'div'> & {
		className?: string;
		size?: keyof typeof styles.sizes;
		children: React.ReactNode;
	};

type DialogButtonProps = React.ComponentPropsWithoutRef<'button'> &
	React.ComponentProps<typeof Button> & {
		className?: string;
		children: React.ReactNode;
	};

type DialogProviderProps = {
	children: React.ReactNode;
};

type DialogHeadingProps = {
	className?: string;
	children: React.ReactNode;
};

type DialogTextProps = React.ComponentPropsWithoutRef<'p'> & {
	className?: string;
	children: React.ReactNode;
};

type DialogBodyProps = React.ComponentPropsWithoutRef<'div'> & {
	className?: string;
	children: React.ReactNode;
};

type DialogActionsProps = React.ComponentPropsWithoutRef<'div'> & {
	className?: string;
	children: React.ReactNode;
};

const styles = {
	sizes: {
		xs: 'sm:max-w-xs',
		sm: 'sm:max-w-sm',
		md: 'sm:max-w-md',
		lg: 'sm:max-w-lg',
		xl: 'sm:max-w-xl',
		'2xl': 'sm:max-w-2xl',
		'3xl': 'sm:max-w-3xl',
		'4xl': 'sm:max-w-4xl',
		'5xl': 'sm:max-w-5xl',
	},
};

const DialogContext = React.createContext<{
	state: DialogAction;
	setState: React.Dispatch<React.SetStateAction<DialogAction>>;
}>({
	state: DialogAction.close,
	setState: () => {},
});

const DialogProvider: React.FC<DialogProviderProps> = ({ children }: DialogProviderProps) => {
	const [state, setState] = React.useState(DialogAction.close);
	return <DialogContext.Provider value={{ state, setState }}>{children}</DialogContext.Provider>;
};

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
	return (
		<DialogProvider>
			<div {...props} />
		</DialogProvider>
	);
};

export const DialogWindow: React.FC<DialogWindowProps> = ({ size = 'md', ...props }: DialogWindowProps) => {
	const { state } = React.useContext(DialogContext);

	return (
		<>
			<dialog
				{...props}
				open={state === DialogAction.open}
			>
				<div className='fixed inset-0 z-10 flex justify-center w-screen px-2 py-2 overflow-y-auto bg-zinc-950/25 backdrop-blur-sm focus:outline-0 sm:px-6 sm:py-8 lg:px-8 lg:py-16' />
				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex items-center justify-center min-h-screen'>
						<div
							className={`relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:p-6 ${styles.sizes[size]}`}
						>
							{props.children}
						</div>
					</div>
				</div>
			</dialog>
		</>
	);
};

export const DialogButton: React.FC<DialogButtonProps> = (props: DialogButtonProps) => {
	const { state, setState } = React.useContext(DialogContext);

	return (
		<Button
			{...props}
			onClick={() => setState(state === DialogAction.open ? DialogAction.close : DialogAction.open)}
		/>
	);
};

export const DialogHeading: React.FC<DialogHeadingProps> = (props: DialogHeadingProps) => {
	return (
		<>
			<Heading
				{...props}
				element='h4'
				className='text-center text-balance sm:text-wrap sm:text-left'
			/>
		</>
	);
};

export const DialogText: React.FC<DialogTextProps> = (props: DialogTextProps) => {
	return (
		<>
			<Text
				{...props}
				className='mt-2 text-center text-pretty sm:text-left'
			/>
		</>
	);
};

export const DialogBody: React.FC<DialogBodyProps> = (props: DialogBodyProps) => {
	return (
		<div
			{...props}
			className='mt-4'
		/>
	);
};

export const DialogActions: React.FC<DialogActionsProps> = (props: DialogActionsProps) => {
	return (
		<div
			{...props}
			className='mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto'
		/>
	);
};

export const DialogCloseButton: React.FC<DialogButtonProps> = (props: DialogButtonProps) => {
	const { setState } = React.useContext(DialogContext);

	return (
		<Button
			{...props}
			onClick={() => setState(DialogAction.close)}
		/>
	);
};
