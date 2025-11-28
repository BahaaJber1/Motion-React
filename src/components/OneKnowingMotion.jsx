import { motion as m } from "motion/react";

function KnowingMotion() {
	return (
		<m.div
			className="p-5"
			animate={{ marginTop: 50, opacity: 0.2, rotateZ: 180 }}
		>
			<m.h1 animate={{ fontSize: "7em", color: "#f55", x: 100, y: 50 }}>
				App
			</m.h1>
			<m.button
				className="border rounded-full px-3 py-2 cursor-pointer"
				animate={{ scale: 1.5 }}
			>
				Click Me
			</m.button>
		</m.div>
	);
}

export default KnowingMotion;
