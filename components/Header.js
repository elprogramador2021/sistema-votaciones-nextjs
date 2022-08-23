import React from "react"
import { FaVoteYea } from "react-icons/fa"

import DropDown from "./DropDown"

const Header = () => {
    return (
        <header className="sticky top-0 z-50 h-14 flex bg-cyan-800 text-slate-200 px-2 ">
            <div className="flex flex-row justify-start items-center w-screen pl-4">
                <FaVoteYea size={40} />
                <div className="text-1xl hover:text-base pl-2">Sistema de votación</div>
            </div>

            <div className="flex flex-row justify-end items-center w-screen">
                {/*<ConnectButton moralisAuth={false} />*/}
                <DropDown />
            </div>
        </header>
    )
}

export default Header
