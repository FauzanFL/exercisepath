'use client';

const { default: Link } = require('next/link');

const Button = ({ className, href = '', content, click }) => {
  return (
    <Link onClick={click} className={className} href={href}>
      {content}
    </Link>
  );
};

export default Button;
