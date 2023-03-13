import React, { FC , useState} from 'react';
import styles from './Main.module.scss';
import Discount from '../../HomeArea/Discount/Discount';
import Specials from '../../HomeArea/Specials/Specials';
import Desserts from '../../HomeArea/Desserts/Desserts';
import Dessert from '../../HomeArea/Dessert/Dessert';
import Recommendations from '../../Recommendations/Recommendations';
import Sale from '../../HomeArea/Sale/Sale';
import Counter from '../../HomeArea/Counter/Counter';
import Input from '../../HomeArea/Input/Input';
import Clock from '../../HomeArea/Clock/Clock';
import RandomDiscount from '../../HomeArea/RandomDiscount/RandomDiscount';

interface MainProps {}

const Main: FC<MainProps> = () => {

  const [counter, setCounter] = useState(0);
  const [value,setValue] = useState ('');
  // const [price,setValue] = useState ();


  const increaseCounterHandler = () => {
    setCounter((prevState) => prevState = prevState +1 )
  }

  const decreaseCounterHandler = () => {
    setCounter((prevState) => {
        if(prevState === 0) return 0;

        return prevState = prevState - 1;
    })
  }

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setValue(e.target.value)
  }
  // const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement> ) =>{
  //   setValue(+e.target.value)
  // }

return (<main className={styles.Main}>
  <Discount/>
  <Specials/>
  {/* <Desserts/> */}
  <Recommendations/>

  <Sale category="Beverages" percent={10}>
    more data
  </Sale>
  
  <Sale  category="candies" percent={15}> 
  <div style={{ border: '1px solid red'}}>this is a div</div>
  </Sale>

  <Sale  category="ice cream" percent={30}>
  </Sale>

  <Counter counter={counter} onDecrease={decreaseCounterHandler} onIncrease={increaseCounterHandler} />

 <Input  type="text" value={value} onChange={valueChangeHandler}  />
 {/* <Input  type="number" value={price} onChange={priceChangeHandler}  /> */}


  {counter < 5 &&   <Clock value={value}/>
}


<RandomDiscount/>

</main>
);


}



export default Main;
