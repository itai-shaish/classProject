import React, { FC } from 'react';
import styles from './Recommendations.module.scss';

interface RecommendationsProps {}

const Recommendations: FC<RecommendationsProps> = () => {

  const firstClickHandler = () => {
    console.log('irish coffe')
  }

  const secondClickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
    const button = e.target as HTMLButtonElement;
    const html = button.innerHTML;
  }

  const thirdClickHandler = (id: string) => {
    console.log(id)
  }



return (  <div className={`Box ${styles.Recommendations}`}>
Recommendettions    
 <button onClick={firstClickHandler} className="Box">first</button>
 <button onClick={secondClickHandler} className="Box">second</button>
 <button onClick={(e) => thirdClickHandler('this is id')}  className="Box">third</button>
</div>)
};

export default Recommendations;
