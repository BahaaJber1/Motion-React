import { motion as m } from "motion/react";

/*
    - This component demonstrates hover animations using the motion library.
    - List items scale up and change color on hover.
    - OriginX is set to 0 to scale from the left side.
    - The button also scales and adds shadow effects on hover.
*/

function ThreeHoverAnimation() {
	const items = ["Item 1", "Item 2", "Item 3"];
	return (
		<div className="flex flex-col items-center gap-17">
			<h1> Hover Animation Component</h1>

			<ul>
				{items.map((item, index) => (
					<m.li
						whileHover={{ scale: 1.2, color: "red", originX: 0 }}
						transition={{ type: "spring", stiffness: 300 }}
						key={index}
					>
						{item}
					</m.li>
				))}
			</ul>

			<m.button
				className="border rounded-full p-3"
				whileHover={{
					scale: 1.1,
					textShadow: "0px 0px 8px black",
					boxShadow: "0px 0px 8px black",
				}}
			>
				Hover Me
			</m.button>
		</div>
	);
}

export default ThreeHoverAnimation;
