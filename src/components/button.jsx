export default function Button({ text, hover, color, src }) {
    return (
        <div>
            <button
                className={`text-white ${text}  ${hover} ${color} ${src} px-4 py-2 rounded-lg bg-inherit `}
            >
                {text}
            </button>
        </div>
    );
}
