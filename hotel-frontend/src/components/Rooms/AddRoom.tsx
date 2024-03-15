const AddRoom = (props: any) => {

    return (
        <div className="absolute z-50 bg-yellow flex flex-col h-max items-center justify-between mb-[3%] text-light-black font-medium">

            <div className="NAME flex w-[50%] mb-0 flex-col items-start justify-center">
                <input
                    className="outline-none h-[3rem] w-[100%] bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="text"
                    placeholder="Room name"
                    required
                />
            </div>

            <div className="TYPE">
                <select className="py-[.5rem] cursor-pointer px-[.6rem] text-[1.1rem] outline-none border rounded-md bg-transparent border-greys-etherium">
                    <option value="basic">Basic</option>
                    <option value="family">Family</option>
                    <option value="luxury">Luxury</option>
                    <option value="suite">Suite</option>
                </select>
            </div>

            <div className="PRICE flex w-[50%] mb-0 flex-col items-start justify-center">
                <input
                    className="outline-none h-[3rem] w-full bg-whites-plain rounded-6xs box-border flex flex-row py-[5%] pr-0 pl-[6%] items-start justify-start border-[1px] border-solid border-greys-etherium"
                    type="number"
                    placeholder="Price"
                    required
                />
            </div>











          
        </div>
    )
}

export default AddRoom