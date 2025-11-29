import { useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";

/*
	Animate Presence allows components to animate out when they are removed from the React tree.
	By default, when a component is removed, it disappears instantly without any animation.
	With Animate Presence, you can define exit animations that play when a component is unmounted.	
*/

function SixAnimatePresence() {
	const [show, setShow] = useState(true);
	setTimeout(() => setShow(false), 4000);
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1>Animate Presence</h1>
			<AnimatePresence>
				{show && (
					<m.p exit={{ y: -1000 }}>This paragraph gonna hide in 4 seconds</m.p>
				)}
			</AnimatePresence>
		</div>
	);
}

export default SixAnimatePresence;
