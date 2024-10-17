export function Button({value, label, onClick}){

    return (
        <button
        className="w-full p-2 bg-purplecolor text-white outline-none hover:bg-purpledark transition-all rounded-md"
            type="button"
            value={value}
            onClick={onClick}
        >
        {label}
        </button>
    )
}