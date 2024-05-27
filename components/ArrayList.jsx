import React from 'react'

const ArrayList = ({arr}) => {

    return (
        <main className="flex min-h-screen flex-row items-end justify-center p-24 ">
            {/* <div className="flex  bg-orange-400"> */}
                {
                arr.map((item, index) => {
                    return(
                    // <div className="mr-1" key={index}>
                    //   {item}
                    // </div>
                    <div
                        className="h-10 w-[2px] bg-teal-300 mr-1"
                        key={index}
                        style={{height: `${item}px`}}
                    ></div>

                    )
                })
                }
            {/* </div> */}
        </main>
  )
}

export default ArrayList