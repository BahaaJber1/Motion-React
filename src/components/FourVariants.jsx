import { motion as m } from "motion/react";

/*
    - Variants allow us to:
        1. Extract into outside objects for reusability and keep the code clean
        2. Propagate variants changes through the DOM tree
            Meaning that the child components can inherit the variant states of the parent component (initial = "hidden", animate = "visible")
            They should have the same variant names defined (hidden, visible), that way we can keep our code cleaner and avoid passing down props manually
        3. Create timing relationships between parent and child motions using transition orchestration props like delayChildren, staggerChildren, when, etc.
*/

// 1.
const boxVariant = {
	hidden: {
		x: "-100vw",
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.4,
			damping: 8,
			when: "beforeChildren", // or afterChildren
			staggerChildren: 0.4,
		},
	},
};

const headingVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { type: "spring" },
	},
};

function FourVariants() {
	return (
		<m.div variants={boxVariant} initial="hidden" animate="visible">
			FourVariants
			<m.div>
				<m.h2 variants={headingVariant}>Hello</m.h2>
			</m.div>
		</m.div>
	);
}

export default FourVariants;
