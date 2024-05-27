import React from 'react'

const ControlPanel = ({arr, setArr, generateRandomArray}) => {
    const handleClick = () => {
        setArr(generateRandomArray());
    }
    const handleMergeSort = () => {
        console.log('Merge sort');
    }
    return (
        <div className="fixed top-0 left-0 w-full bg-transparent z-10">
            <button
                className="bg-teal-500 hover:bg-teal-700 m-4 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
            >
                Generate Random Array
            </button>
            <button
                className="bg-teal-500 hover:bg-teal-700 m-4 text-white font-bold py-2 px-4 rounded"
                onClick={handleMergeSort}
            >
                Merge Sort
            </button>
        </div>
    )
}

export default ControlPanel