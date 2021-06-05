import React, { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef((props: IInputProps, ref: any) => {
  return <input ref={ref} type="text" {...props} />;
});
