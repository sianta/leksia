import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ReactNode, useEffect } from 'react';

function DialogBackground({ children, isOpen }: { children: ReactNode, isOpen: boolean }) {
    useEffect(() => {
        if (isOpen != true) {
            document.body.classList.remove("overflow-hidden")
        } else {
            document.body.classList.add("overflow-hidden")
        }

    });
    return (
        <div className='w-full h-screen bg-black/10 fixed z-[9999999999999] inset-0 backdrop-blur-sm text-black dark:text-white'>
            {children}
        </div>
    );
}

export function SearchDialog({ closeSearchDialog }: { closeSearchDialog: any }) {
    const searchLists: never[] | null = [];
    let RenderSearchLists = () => {
        if (searchLists != null) {
            return (
                <div className='w-full h-60 flex items-center justify-center text-black/50 dark:text-white/40'>
                    {/* <span>No recent searches</span> */}
                    <span>COOMING SOON</span>
                </div>
            );
        } else {
            return (
                <div>Ada</div>
            );
        };
    };


    return (
        <DialogBackground isOpen={true} >
            <div className="w-[800px] mx-auto min-h-[50px] bg-white mt-[10vh] dark:bg-black rounded-xl overflow-hidden shadow dark:shadow-white/20 pt-2">
                {/* Header */}
                <div className="flex items-center  justify-between px-4 pb-2 border-b dark:border-b-white/20">

                    <div className='flex items-center  '>
                        <div className='w-5 h-5'>
                            <MagnifyingGlassIcon />
                        </div>
                        <input
                            disabled
                            type="text"
                            name="search"
                            placeholder='Search .....'
                            id="search"
                            className='h-10 w-[600px]  ml-3  !outline-none bg-transparent dark:placeholder:text-white/60'
                        />
                    </div>

                    {/* Close Button */}
                    <button onClick={closeSearchDialog} className="font-mono text-[9px] font-semibold py-3 px-1  leading-[0] rounded-md border hover:shadow dark:shadow-white">
                        ESC
                    </button>
                </div>

                {/* Body */}
                <div className='w-full min-h-fit '>
                    {RenderSearchLists()}
                </div>
            </div>
        </DialogBackground>
    );
};

