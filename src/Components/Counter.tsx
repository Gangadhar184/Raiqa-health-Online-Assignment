import { useState, useEffect } from 'react'
import List from './List';

interface NumberItem {
    id: string;
    value: number;
}

const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);
    const [numbers, setNumbers] = useState<NumberItem[]>([]);
    const [sortDesc, setSortDesc] = useState<boolean>(true)

       // Load from localStorage on first render
    useEffect(() => {
        const savedNumbers = localStorage.getItem('numbers');
        if (savedNumbers) {
            setNumbers(JSON.parse(savedNumbers));
        }
    }, []);

    // Save to localStorage whenever numbers changes
    useEffect(() => {
        localStorage.setItem('numbers', JSON.stringify(numbers));
    }, [numbers]);

    const handleIncrementCounter = () => {
        setCount(prev => prev + 1);
    }

    const handleDecrementCounter = () => {
        setCount(prev => (prev > 0 ? prev - 1 : prev));
    }

    const handleAddToList = () => {
        if (numbers.some(item => item.value === count)) {
            alert(`Number ${count} already exists in the list!`);
            return;
        }

        const newItem: NumberItem = {
            id: crypto.randomUUID(),
            value: count
        };
        setNumbers(prev => [...prev, newItem]);
    }

    const handleReset = () => {
        setNumbers([]);
    }

    const handleSort = () => {
        setNumbers(prev => (
            [...prev].sort((a, b) => sortDesc ? b.value - a.value : a.value - b.value)
        ));
        setSortDesc(prev => !prev);
    }

    const handleRemove = (id: string) => {
        setNumbers(prev => prev.filter(item => item.id !== id));
    }


    return (
        <>

            <div className="flex flex-col items-center mx-auto w-[90%] sm:w-[70%] md:w-[400px] rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 mt-10">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Counter
                </h3>
                <div className="flex items-center justify-center gap-6 mt-5">
                    <button
                        onClick={handleDecrementCounter}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 text-lg font-bold hover:bg-blue-50 cursor-pointer"
                    >
                        -
                    </button>

                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {count}
                    </span>

                    <button
                        onClick={handleIncrementCounter}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 text-lg font-bold hover:bg-blue-50  cursor-pointer"
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={handleAddToList}
                    className="mt-6 w-full bg-blue-500 text-white text-sm sm:text-base font-medium py-2 sm:py-3 rounded-md  cursor-pointer">
                    Add to List
                </button>
            </div>
            <List numbers={numbers} onReset={handleReset} onSort={handleSort} sortDesc={sortDesc} onRemove={handleRemove} />
        </>


    );

}

export default Counter;
