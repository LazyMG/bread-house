import Link from "next/link"

interface MenuLinkProps {
  closeNav: () => void;
  href:string;
  color:string;
  title:string
}

const MobileMenuLink = ({closeNav,href,color,title}:MenuLinkProps) => {
  return (
    <Link
        href={href}
        onClick={closeNav}
        className="group h-[62px] w-full flex items-center px-[26px] justify-between"
        style={{backgroundColor:color}}
      >
        <span className="group-hover:text-[rgba(43,43,43,1)]">{title}</span>
        <div className="w-[24px] h-[24px] rounded-full border border-[rgba(43,43,43,0.6)] text-[rgba(43,43,43,0.6)] flex items-center justify-center group-hover:bg-black group-hover:text-white font-thin" />
      </Link>
  )
}

export default MobileMenuLink