import styles from '@styles/button.module.scss';

/**
 * Button component props. Extends standard button attributes.
 */
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text displayed inside the button. */
  text: string;
}

/**
 * Styled button component with customizable properties.
 *
 * @component
 * @param {Props} props - Button props.
 * @param {string} props.text - Text displayed inside the button.
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement> - Extends standard button attributes.
 *
 * @example
 * <Button text="Click Me"  onClick={() => console.log('Clicked!')}  />
 */
export default function Button({ text, ...rest }: Props) {
  return (
    <button {...rest} className={styles.button}>
      {text}
    </button>
  );
}
