import React from "react"
import { Card, Illustration } from "web3uikit"
import Image from "next/image"

const IMG_CANDIDATO =
    "https://media.istockphoto.com/photos/portrait-of-a-young-professional-man-picture-id1086350530?k=20&m=1086350530&s=612x612&w=0&h=jm9UE1LXqdf5R8qEHqQO9Dfelztap08t78bZF6rloPg="
const IMG_CANDIDATO2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yRiPx0waPCiewJoscvOHfBeBLgwrSgTj2nLgq0vEkkOC7gQTHJYhEc8pn4PLnmnXQmw&usqp=CAU"
const IMG_PARTIDO_LOG =
    "https://i0.wp.com/reformaspoliticas.org/wp-content/uploads/2015/02/partidos-politicos.jpg?fit=1349%2C447&ssl=1"

const CasillaVotacion = ({ id, marcado, seleccionarCantidato }) => {
    return (
        <div className="m-1">
            <Card
                onClick={function noRefCheck() {}}
                setIsSelected={function noRefCheck() {}}
                title={
                    <div className="pt-2">
                        <Image
                            loader={() => IMG_PARTIDO_LOG}
                            src={IMG_PARTIDO_LOG}
                            height="40"
                            width="160"
                        />
                    </div>
                }
                tooltipText="Lorem Ipsum Dole met sai souni lokomit anici trenicid"
            >
                <div onClick={() => seleccionarCantidato(id)}>
                    <div className={`mt-7 flex ${marcado}`}>
                        <div className="flex flex-col flex-1">
                            <Image
                                loader={() => IMG_CANDIDATO}
                                src={IMG_CANDIDATO}
                                height="140"
                                width="80"
                            />
                            <span className="font-bold text-xs text-center pr-1">PRESIDENTE</span>
                            <span className="text-xs text-center">NOMBRE</span>
                            <span className="text-xs text-center">APELLIDO</span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <Image
                                loader={() => IMG_CANDIDATO2}
                                src={IMG_CANDIDATO2}
                                height="140"
                                width="80"
                            />
                            <span className="font-bold text-xs text-center pl-1">
                                V.PRESIDENTE
                            </span>
                            <span className="text-xs text-center">NOMBRE</span>
                            <span className="text-xs text-center">APELLIDO</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CasillaVotacion
