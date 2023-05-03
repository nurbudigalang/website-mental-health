import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'h-10 sm:h-[40px] md:h-[50px] lg:h-[60px] border-[#333333] focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' +
                className
            }
            ref={input}
        />
    );
});
