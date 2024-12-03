type Variant = 'primary' | 'secondary' | 'tertiary';

type NavLinkProps = {
  to: string;
  onClick?: never;
};

type CtaProps = {
  onClick: () => void;
  to?: never;
};

type ButtonProps = {
  text: string;
  variant: Variant;
  to?: string;
  isDisabled?: boolean;
  className?: string;
} & (NavLinkProps | CtaProps);

export type {
  Variant as ButtonVariant,
  ButtonProps
}