import React, { useCallback, useEffect, useState } from 'react';
import Logo from './Logo';
import { MagnifyingGlassIcon, Bars2Icon } from "@heroicons/react/24/outline";
import { SearchDialog } from './Dialog';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const onScroll = useCallback(() => {

        if (window.pageYOffset > 20) {
            setScrolled(true);
        } else if (window.pageYOffset < 10) {
            setScrolled(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);


    const SidebarOpen = () => {
        setSidebarOpen(!isSidebarOpen);
    }


    // Open Search Dialog
    // Init state 
    let [isOpenSearchDialog, setOpenSearchDialog] = useState(false);

    // function open Search Dialog
    const openSearchDialog = () => {
        setOpenSearchDialog(!isOpenSearchDialog);
    };


    // After Change next to render Dialog Panel
    const RenderSearchDialog = () => {
        // Check Condition
        if (isOpenSearchDialog) {
            // When value true this will render this element
            return <SearchDialog closeSearchDialog={openSearchDialog} />;
        };
    };


    // Add class overflow-hidden to body tag
    useEffect(() => {
        // Chek state
        isOpenSearchDialog
            // if the value true add class
            ? document.body.classList.add("overflow-hidden")
            // if the value true false class
            : document.body.classList.remove("overflow-hidden");

        // Event Open and Close Search Dialog use keyboard
        function onKeyDown(event: {
            keyCode: number;
            preventDefault: any; key: string; metaKey: any; ctrlKey: any;
        }) {
            // Event Open and Close Search Dialog use "ctrl k"
            if (event.key == 'k' && (event.metaKey || event.ctrlKey)) {
                setOpenSearchDialog(!isOpenSearchDialog);
                event.preventDefault(); // this will disable  default event from browser
            };
            // Event Open and Close Search Dialog use "escape"
            if (event.key == 'Escape') {
                setOpenSearchDialog(false);
                event.preventDefault(); // this will disable  default event from browser
            };
        };

        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        }
    }), [isOpenSearchDialog];



    return (
        <>

            {RenderSearchDialog()}
            <header className={`${scrolled ? "sticky shadow-xl py-2" : "py-6"} duration-500 top-0 left-0 right-0 bg-white w-full z-50 px-2 md:px-0`}>
                <div className='max-w-6xl mx-auto flex justify-between items-center'>
                    <div className='flex items-center'>
                        <button title='Menu' className='' onClick={SidebarOpen}>
                            <div className='w-6 h-6'>
                                <Bars2Icon />
                            </div>
                        </button>

                        {/* Sidebar */}
                        <aside className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition duration-500 fixed inset-0 w-60 h-screen bg-neutral-100 shadow-2xl z-[99]`}>
                            <button onClick={SidebarOpen}>CLOSE</button>
                        </aside>




                        <div className={`${scrolled ? "scale-50 -translate-x-12" : "scale-100 translate-x-0"} duration-500 ml-4`}>
                            <Logo />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={openSearchDialog}
                            className='flex space-x-2 items-center pr-3 md:pr-0 rounded-full px-5 py-2 bg-neutral-200 text-neutral-500 shadow-inner '>
                            <div className='w-5 h-5'>
                                <MagnifyingGlassIcon />
                            </div>
                            <span className='hidden md:flex'>Cari sesuatu ... </span>
                            <span className='hidden md:flex px-10'>Ctrl K</span>
                        </button>
                    </div>

                </div>
            </header>
        </>
    );
};
