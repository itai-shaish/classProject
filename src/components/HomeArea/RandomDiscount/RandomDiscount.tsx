import React, { FC , useState } from 'react';
import styles from './RandomDiscount.module.scss';

interface RandomDiscountProps {}

const RandomDiscount: FC<RandomDiscountProps> = () => {

  const [randomDiscount , setRandomDiscount]  = useState(0);
  const genearateRandomDiscount = (): void => {
    const random = Math.floor(Math.random() * 100);
    setRandomDiscount(random)
  }

  const discountString = randomDiscount > 0 ? `${randomDiscount}%` : randomDiscount;
  

  return (
    <div className={`Box ${styles.RandomDiscount}`}>
      <button onClick={genearateRandomDiscount}>Random Discount</button>
      <span>Random Discount: {discountString}</span>
      
          </div>
  );
}

export default RandomDiscount;
