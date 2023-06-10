import Link from "next/link"
import { Poppins } from 'next/font/google'

const popin = Poppins(
    {
        subsets: ["latin"],
        weight: ["300", "400", "500", "600", "700", "800"]
    }
)

const NavContent: any = () => {
    return (
        <div>
            <ul className="flex items-center">
                <li className={`${popin.className} cursor-pointer ml-14 text-lg`}>
                    <Link href={'/male'}>
                        Male
                    </Link>
                </li>
                <li className={`${popin.className} cursor-pointer ml-14 text-lg`}>
                    <Link href={'/female'}>
                        Female
                    </Link>
                </li>
                <li className={`${popin.className} cursor-pointer ml-14 text-lg`}>
                    <Link href={'/kids'}>
                        Kids
                    </Link>
                </li>
                <li className={`${popin.className} cursor-pointer ml-14 text-lg`}>
                    <Link href={'/products'}>
                        All Products
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavContent
