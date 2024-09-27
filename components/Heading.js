import Link from 'next/link'
import Script from 'next/script'



export default function Heading(props) {
    return (
        <header
            class="fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 bg-dark/70 backdrop-blur-lg shadow !py-4 lg:!py-0 transition duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border"

        >
            <div
                class="max-w-[1170px] mb-5 mt-4 mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative"
            >
                <div class="w-full lg:w-1/4 flex items-center justify-between">
                    <Link href="/">
                        <a class="flex items-center space-x-2">
                            <div class="flex space-x-1">
                                <div
                                    class="h-4 w-4 rounded-full bg-white"
                                ></div>
                                <div class="h-6 w-2 hero-button-gradient"></div>
                            </div>
                            <span
                                class="text-2xl font-bold text-white"
                            >Vixcord</span
                            >
                        </a>
                    </Link>
                </div>


            </div>

        </header>
    )
}

