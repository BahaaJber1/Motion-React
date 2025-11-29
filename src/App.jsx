import { motion as m } from "motion/react";
import { NavLink } from "react-router";

const Routes = [
	{ to: "/knowing-motion", label: "Knowing Motion" },
	{ to: "/initial-animation", label: "Initial Animation" },
	{ to: "/hover-animation", label: "Hover Animation" },
	{ to: "/variants", label: "Variants" },
	{ to: "/keyframes", label: "KeyFrames" },
	{ to: "/animate-presence", label: "Animate Presence" },
];

const containerVariants = {
	hidden: { x: "-500vw" },
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
			when: "beforeChildren",
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
		},
	}),
};

const spanVariants = {
	hover: {
		scale: 1.1,
		backgroundColor: "#21ded7",
		color: "#000000",
	},
	tap: {
		scale: 0.9,
		backgroundColor: "#00fff6",
		color: "#000000",
	},
};

function App() {
	return (
		<m.div
			className="justify-center items-center flex flex-col gap-5 text-lg text-gray-100 py-10 px-5 min-h-screen bg-linear-to-br from-[#2c3e50] to-[#4ca1af]"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h1 className="text-xl md:text-3xl lg:text-6xl font-medium">Lessons: </h1>
			<ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`}>
				{Routes.map(({ to, label }, i) => (
					<m.li
						variants={itemVariants}
						custom={i}
						key={to}
						className="text-center"
					>
						<NavLink to={to}>
							<m.span
								className="bg-[#42bcb8] w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] flex items-center justify-center rounded-3xl text-sm md:text-lg lg:text-xl "
								variants={spanVariants}
								whileHover="hover"
								whileTap="tap"
							>
								{i + 1}. {label}
							</m.span>
						</NavLink>
					</m.li>
				))}
			</ul>
		</m.div>
	);
}

export default App;
