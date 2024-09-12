import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ logo }) => {
  return (
    <li>
      <Link href='logo.url' target='_blank'>
        <Image
          src={logo.image}
          alt='logo'
          width={logo.width}
          height={logo.height}
          priority
        />
      </Link>
    </li>
  );
};

export default Logo;
