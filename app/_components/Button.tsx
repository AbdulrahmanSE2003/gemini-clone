import { HTMLMotionProps, motion } from "motion/react";
import { ComponentPropsWithoutRef } from "react";

type MotionButtonProps = {
  isMotioned: true;
} & HTMLMotionProps<"button">;

type StandardButtonProps = {
  isMotioned?: false;
} & ComponentPropsWithoutRef<"button">;

type ButtonProps = MotionButtonProps | StandardButtonProps;

const Button = (props: ButtonProps) => {
  const { children, isMotioned, ...otherProps } = props;

  if (isMotioned) {
    return (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`hover:bg-brand-gray cursor-pointer transition-colors duration-200 rounded-full p-2 ml-auto ${otherProps.className || ""}`}
        {...otherProps} // Forward remaining props
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      className={`hover:bg-brand-gray cursor-pointer transition-colors duration-200 rounded-full p-2 ${otherProps.className || ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
