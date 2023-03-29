import './globals.css'

export const metadata = {
    title: 'Guilherme Toti - Lead Software Engineer',
    description: 'A full-stack software developer with extensive experience in Python and React.JS',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
