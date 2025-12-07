import type {ReactNode} from 'react'

interface Props {
    children: ReactNode
}

export default function DefaultLayout({children}: Props) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <main className="flex-1 container mx-auto p-6">{children}</main>
        </div>
    )
}
