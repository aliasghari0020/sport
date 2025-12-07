import type {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

export default function DefaultLayout({children}: Props) {
    return (
        <div className="flex flex-col   ">
            <main className="">{children}</main>
        </div>
    )
}
