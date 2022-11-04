import Link from 'next/link'
export const Header = () => {
    return (
        <div>
            <Link href="/">
                <div className='header'>
                    Wellcome to Takk Blog <span>😀</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;