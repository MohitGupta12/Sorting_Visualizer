"use client"

import ArrayList from '@/components/ArrayList';
import ControlPanel from "@/components/ControlPanel.jsx";
import {useState} from 'react';

export default function Home() {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomArray = () => {
    const array = [];
    for (let i = 0; i < 200; i++) {
      array.push(getRandomNumber(10, 500));
    }
    return array;
  };

  // const arr = generateRandomArray();
  const [arr, setArr] = useState(() => generateRandomArray())
  return (
  <div>

      <ControlPanel
        arr={arr}
        setArr={setArr}
        generateRandomArray={generateRandomArray}
      />

      <ArrayList
        arr={arr}
      />

  </div>
  );
}
