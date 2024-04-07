import { Heading } from "@/components/core/Heading";
import React from "react";

type HomeProps = React.ComponentPropsWithoutRef<'main'> & {
	children?: React.ReactNode;
	className?: string;
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
	return (
		<main {...props}>
			<Heading element='h1'>Home</Heading>
		</main>
	);
};