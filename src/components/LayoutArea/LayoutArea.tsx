import React, { FC } from 'react';
import styles from './LayoutArea.module.scss';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import Footer from './Footer/Footer';
import Main from './Main/Main';


interface LayoutAreaProps {}

const LayoutArea: FC<LayoutAreaProps> = () => (
  <div className={styles.LayoutArea}>
    <Header/>
    <Aside/>
    <Main/>
    <Footer/>
  </div>
);

export default LayoutArea;
