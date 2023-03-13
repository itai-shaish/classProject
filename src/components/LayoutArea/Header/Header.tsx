import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
<header className={styles.Header}>
  <h1>NorthWind</h1>
</header>
);

export default Header;
