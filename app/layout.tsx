import './globals.css'

const title = 'Guilherme Toti - Lead Software Engineer'
const description = 'A full-stack software developer with extensive experience in Python and React.JS'
export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: 'https://guilhermetoti.com',
        siteName: 'Guilherme Toti',
        images: [
            {
                url: 'https://www.guilhermetoti.com/guilherme-toti-portrait.webp',
                width: 908,
                height: 908,
                alt: 'Guilherme Toti Profile Picture',
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
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
