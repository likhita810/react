export default function Input ({label, textarea, ...props}) {
    
    const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-400 bg-stone-200 text-stone-600 focus:border-stone-600 focus:outline-none '
    return (
        <p className="flex flex-col gap-1 my-4">
            <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textarea ? (
                <textarea className={classes} {...props}/>
                // props is used as textarea will have different chars that has to be displayed
            ) : (
                <input className={classes}/>
            )}
        </p>
    )
}