import React from "react";
import { Planet } from "../models/Planet";
import Header from "./Header";
import Meta from "./Meta";

interface Props {
	children: React.ReactNode;
	planets: Planet[];
}

const Layout = ({ children, planets }: Props) => {
	return (
		<>
			<Meta />
			<Header planets={planets} />
			{children}
		</>
	);
};

export default Layout;
