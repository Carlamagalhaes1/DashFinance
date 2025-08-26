import { useState } from "react"


export function Modal() {

    const [open, setOpen] = useState(false)
    return (
        <div>
            <div>
                <button  onClick={() => setOpen(true)}>Abrir</button>

            </div>

            {open && (<div>aberto
                <button  onClick={() => setOpen(false)}>Fechar</button>
            </div>

            )}
        </div>
    )
    
}