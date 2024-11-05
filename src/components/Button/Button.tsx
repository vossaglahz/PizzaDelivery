import { ButtonProps } from "./Button.props";
import cn from 'classnames';
import './Button.module.scss';

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={cn("button accent", className)} {...props}>{children}</button>
    );
};

export default Button;