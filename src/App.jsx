


export default function App() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 hover: whitespace-normal">
        <div className="shrink-0">
          <img className="w-12 h-12" src="/src/assets/react.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
}
