import React from 'react'

const List: React.FC = () => {
    return (
        <div className='flex flex-col  mx-auto w-[90%] sm:w-[70%] md:w-[400px] rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 mt-10 '>

            <div className='flex justify-between'>
                <h3>Number List</h3>
                <div className='flex '>
                    <button >Rest</button>
                    <button>Sort</button>
                </div>

            </div>
        </div>
    )
}

export default List;
