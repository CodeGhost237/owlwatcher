export function Input({placeholder, value, onChange}){
    return (
        <input
            className="w-full outline-none mb-3 bg-graydark focus:ring-2 p-2 rounded-md focus:shadow-md transition-all text-white"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    )
}

export default Input