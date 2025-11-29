import { motion as m } from "motion/react";

/*
	1. Using Keyframes with Motion
		- Animate multiple values in sequence
		- Define keyframes as arrays
	2. Repeating animations
		- Using "repeat: Infinity" in the transition object to create looping animations
 */

const buttonVariants = {
	hover: {
		// scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
		scale: 1.1,
		textShadow: "0px 0px 8px black",
		boxShadow: "0px 0px 8px black",
		transition: { repeat: Infinity, duration: 0.3, repeatType: "mirror" },
	},
};

function FiveKeyFrames() {
	return (
		<m.div
			className="flex flex-col items-center justify-center h-screen gap-5"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.5, duration: 1.5 }}
		>
			<h2>Welcome to KeyFrames</h2>
			<m.button
				className="px-4 py-2.5 rounded-full border"
				variants={buttonVariants}
				whileHover="hover"
			>
				Hover Me
			</m.button>
		</m.div>
	);
}

export default FiveKeyFrames;
