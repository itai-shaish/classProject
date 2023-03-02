import React, { FC } from 'react';
import styles from './LayoutArea.module.scss';

interface LayoutAreaProps {}

const LayoutArea: FC<LayoutAreaProps> = () => (
  <div className={styles.LayoutArea}>
    <header>Header</header>
    <aside>Aside</aside>
    <main>Main</main>
    <footer>footer</footer>
  </div>
);

export default LayoutArea;
