import { component$, Slot, QRL } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  onClick$?: QRL<(event?: Event) => void>;
  class?: string;
  disabled?: boolean;
  style?: string;
  rightIcon?: import('@builder.io/qwik').JSXNode;
}

export const Button = component$<ButtonProps>(props => {
  const {
    size = 'md',
    href,
    target,
    rel,
    onClick$,
    rightIcon,
    class: additionalClass = '',
    disabled = false,
    style: additionalStyle = '',
  } = props;

  const baseClasses =
    'group inline-flex items-center justify-between font-medium transition-all duration-300 backdrop-blur-xl glass-button hover:opacity-80';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'p-4 text-base',
    lg: 'px-6 py-5 text-lg',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} rounded-lg ${additionalClass}`;

  const innerContent = (
    <>
      <Slot />
      {rightIcon && (
        <span class='flex items-center gap-2 ml-auto button-right-icon'>
          {rightIcon}
        </span>
      )}

      {!rightIcon && (
        <span class='button-right-text'>
          <Slot name='right' />
        </span>
      )}
    </>
  );

  const commonProps = {
    class: classes,
    style: additionalStyle,
    disabled,
  };

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} {...commonProps}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick$={onClick$} type='button' {...commonProps}>
      {innerContent}
    </button>
  );
});
