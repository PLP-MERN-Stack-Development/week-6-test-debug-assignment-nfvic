import React from 'react';

const Button = ({
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const disabledClass = disabled ? 'btn-disabled' : '';
  const classes = [variantClass, sizeClass, disabledClass, className].filter(Boolean).join(' ');

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={classes}
      data-testid={rest['data-testid'] || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button; 