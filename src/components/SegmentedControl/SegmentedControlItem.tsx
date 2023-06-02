import { ReactNode } from 'react';
import { item, itemText, itemHighlight, type Selected } from './SegmentedControl.css';
import { motion } from 'framer-motion';

interface Props {
	children: ReactNode;
	value: string;
	layoutId: string;
	isSelected?: Selected;
	onChange: (value: string) => void;
}

const spring = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

const SegmentedControlItem = ({ children, value, layoutId, isSelected = false, onChange }: Props) => {
	return (
		<li className={item} onClick={() => onChange(value)}>
			{isSelected && <motion.div layout className={itemHighlight} layoutId={layoutId} transition={spring} />}
			<span className={itemText({ selected: isSelected })}>{children}</span>
		</li>
	);
};

export default SegmentedControlItem;
