import React, { FC , useEffect, useState } from 'react';
import styles from './Clock.module.scss';

interface ClockProps {
  value:string;
}

const Clock: FC<ClockProps> = ({value}) => {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=> {

    const id = setInterval(()=> {
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      setTime(currentTime);

},1000);

    return () => {
      clearInterval(id)

    }

  }, [])



  if (value.length > 3){
    return <h1>Value LENGTH 3</h1>
  }


  return (
    <div className={`Box ${styles.Clock}`}>
        <span>{time}</span>
    </div>
  );
}

export default Clock;
