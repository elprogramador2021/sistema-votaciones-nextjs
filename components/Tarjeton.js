import React, { useState } from "react"
import { FaClipboardList } from "react-icons/fa"
import { AiOutlineQrcode } from "react-icons/ai"
import CasillaVotacion from "./CasillaVotacion"
import { Card, Illustration } from "web3uikit"
import Image from "next/image"

const IMG_VOTO_BLANCO = "https://nadaesmentira.files.wordpress.com/2018/03/voto-blanco1.jpeg"

const Tarjeton = () => {
    const [candidatoSel, setCantidatoSel] = useState(-1)

    const seleccionarCantidato = (id) => {
        setCantidatoSel(id)
    }
    return (
        <div className="flex justify-center drop-shadow-md">
            <div className="max-w-3xl h-full bg-slate-400">
                <div className="flex justify-center">
                    <div className="flex justify-start items-center px-2 bg-cyan-800 text-white">
                        <FaClipboardList size={30} />
                        <div className="flex flex-col items-center">
                            <span className="text-sm">Elecciones</span>
                            <div className="font-bold">2022</div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center px-2 bg-cyan-50 text-cyan-800">
                        <div className="flex flex-col items-center">
                            <span className="text-xs text-center tracking-tighter font-bold">
                                VOTO POR LA FÓRMULA DE PRESIDENTE Y VICEPRESIDENTE DE LA REPÚBLICA
                            </span>
                            <span className="text-xs font-semibold">PERIODO 2022 - 2026</span>
                        </div>
                    </div>
                    <div className="flex justify-end items-center px-2 bg-cyan-50 text-cyan-800">
                        <div className="flex flex-col items-center">
                            <AiOutlineQrcode size={60} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="flex justify-center flex-wrap bg-slate-400">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <CasillaVotacion
                                key={i}
                                id={i}
                                marcado={candidatoSel == i ? "marcado" : ""}
                                seleccionarCantidato={seleccionarCantidato}
                            />
                        ))}
                        <div className="p-2">
                            <Card
                                description={<br />}
                                onClick={function noRefCheck() {}}
                                setIsSelected={function noRefCheck() {}}
                                title="Voto en Blanco"
                                tooltipText=""
                            >
                                <div onClick={() => seleccionarCantidato(0)}>
                                    <div className={`mt-7 flex ${candidatoSel == 0 && "marcado"}`}>
                                        <div className="flex flex-col flex-1 mb-12">
                                            <Image
                                                loader={() => IMG_VOTO_BLANCO}
                                                src={IMG_VOTO_BLANCO}
                                                height="140"
                                                width="170"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjeton
