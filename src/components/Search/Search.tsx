import { forwardRef } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search({ isValid = true, className, ...props}, ref) {
    return (
        <div className={styles["inputWrapper"]}>
            <input ref={ref} className={cn(styles['input'],className, {
                [styles['invalid']]: isValid
            })} {...props} />
            <img className={styles["icon"]} src="/search.svg" alt="search" />
        </div>
    );
});

export default Search;   