import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - StoveSeller`;
        } else {
            document.title = 'StoveSeller | The Perfect Stove Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
