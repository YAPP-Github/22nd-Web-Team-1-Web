'use client';

import { ButtonHTMLAttributes } from 'react';
import { button, buttonText } from './Dropdown.css';
import CaretDownIcon from './Icons/CaretDownIcon';
import DropdownToggle from './DropdownToggle';

/**
 * @property {string} placeholder? - 선택된 요소가 없을때 기본적으로 버튼에 표시할 텍스트
 */

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	placeholder?: string;
}

const DropdownButton = ({ children, placeholder = '선택', onClick, ...rest }: Props) => {
	return (
		<DropdownToggle className={button} onClick={onClick} {...rest}>
			<span className={buttonText}>{children ?? placeholder}</span>
			<span aria-hidden={true}>
				<CaretDownIcon size={24} />
			</span>
		</DropdownToggle>
	);
};

export default DropdownButton;