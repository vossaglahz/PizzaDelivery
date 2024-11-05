import { ButtonProps } from "./Button.props";
import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className, appearance="small", ...props }: ButtonProps) => {
    return (
        <button className={cn(styles['button'], styles['accent'], className, {
            [styles['small']]: appearance === "small",
            [styles['big']]: appearance === "big"
        })} {...props}>{children}</button>
    );
};

export default Button;