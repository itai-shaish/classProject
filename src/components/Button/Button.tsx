import React, { FC, ReactNode} from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
};

export default Button;
