import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

interface IconAnchorOnlyProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: JSX.Element;
  href: string;
  className?: string;
}

const IconAnchor = ({ icon, href, className, ...props }: IconAnchorOnlyProps) => {
  return (
    <Link href={href} {...props} className={className}>
      {icon}
    </Link>
  );
};

export default IconAnchor;
