import { useState } from 'react';

const useModal = () => {
	let [isModalOpen, setIsModalOpen] = useState(false);
	let toggle = () => {
		setIsModalOpen(!isModalOpen);
	};

	return { isModalOpen, toggle };
};
export default useModal;
