import type { LinkProps } from 'next/link';
import Link from 'next/link';

interface IconAnchorProps extends LinkProps {
  icon: JSX.Element;
  href: string;
  className?: string;
}

const IconAnchor = ({ icon, href, className, ...props }: IconAnchorProps) => {
  return (
    <Link href={href} {...props} className={className}>
      {icon}
    </Link>
  );
};

export default IconAnchor;
