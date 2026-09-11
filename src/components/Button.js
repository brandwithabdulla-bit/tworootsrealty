import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ 
  children, 
  href, 
  variant = 'primary', // primary, secondary, text
  className = '',
  onClick,
  ...props 
}) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
