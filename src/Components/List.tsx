interface NumberItem {
    id: string;
    value: number;
}

interface ListProps {
    numbers: NumberItem[];
    onReset: () => void;
    onSort: () => void;
    sortDesc: boolean;
    onRemove: (id: string) => void;
}

const List: React.FC<ListProps> = ({
    numbers,
    onReset,
    onSort,
    sortDesc,
    onRemove,
}) => {
    return (
        <div className="flex flex-col mx-auto w-[90%] sm:w-[70%] md:w-[400px]  rounded-xl bg-white p-4 sm:p-6 shadow-lg mt-6 sm:mt-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                <h3 className="font-semibold text-lg sm:text-xl text-center sm:text-left">Numbers List</h3>
                <div className="flex flex-wrap justify-center sm:justify-end gap-2">
                    <button
                        onClick={onReset}
                        className="bg-white border border-red-500 cursor-pointer  text-red-500 px-3 py-1 rounded text-sm sm:text-base "
                    >
                        Reset
                    </button>
                    <button
                        onClick={onSort}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm sm:text-base cursor-pointer"
                    >
                        Sort {sortDesc ? '↓' : '↑'}
                    </button>
                </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2">
                {numbers.map((item, index) => (
                    <li
                        key={item.id}
                        className="flex justify-between items-center bg-gray-50 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base"
                    >
                        <span className="flex items-center gap-1">
                            <span className="font-semibold text-gray-900">{item.value}</span>
                            <small className="text-gray-400">#{index + 1}</small>
                        </span>
                        <button
                            onClick={() => onRemove(item.id)}
                            className="text-gray-400  text-lg font-bold cursor-pointer"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-4 text-xs sm:text-sm text-blue-600 bg-blue-100 rounded-md px-3 py-2 text-center sm:text-left">
                Total numbers: {numbers.length}
            </div>
        </div>
    );
};

export default List;
