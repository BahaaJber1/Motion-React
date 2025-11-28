import { motion as m } from "motion/react";
import { useState } from "react";

/*
    - Initial is used to set the starting state of an animation before it begins.
    - Animate is used to define the end state of an animation.
    - Transition is used to customize the timing and behavior of the animation.
    - Stiffness can be only used with spring type transition, it defines the looseness of the spring.
*/

function InitialAnimation() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<m.header
			className="mx-auto max-w-xl my-5"
			initial={{ y: "-100vw", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
		>
			<button
				className="cursor-pointer block border-2 px-3 py-1 rounded-full"
				onClick={() => setIsVisible(!isVisible)}
			>
				CLICK ME
			</button>

			{isVisible && (
				<m.p
					className="font-bold"
					initial={{ x: "-100vw" }}
					animate={{ x: 0 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
				>
					MIND YOUR BUSINESS
				</m.p>
			)}
		</m.header>
	);
}

export default InitialAnimation;
