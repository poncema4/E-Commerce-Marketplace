import { RefObject } from 'react';

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
    const getDropdownPosition = () => {
        if (!ref.current) return { top: 0, left: 0 };

        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240; // Width of dropdown (w-60 = 15rem = 240px)

        // Calculate initial position
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        // Check if dropdown goes off the right edge of the screen
        if (left + dropdownWidth > window.innerWidth) {
            // Align to right edge of button instead
            left = rect.right + window.scrollX - dropdownWidth;

            // If still off scree, align to the right edge of viewport with some padding
            if (left < 0) {
                left = window.innerWidth - dropdownWidth - 16;
            }
        }
        // Check if dropdown goes off the bottom edge of the screen
        if (left < 0) {
            left = 16;
        }

        return { getDropdownPosition };
    };

    return {
        getDropdownPosition
    };
}