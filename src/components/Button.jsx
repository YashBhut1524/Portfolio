const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass} flex items-center gap-4 py-1 px-2 justify-center`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            )}
            {name}
        </button>
    );
};

export default Button;