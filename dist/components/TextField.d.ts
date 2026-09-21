/**
 * @param {object} props
 * @param {string} props.label Visible label above the input.
 * @param {string} [props.value] Current text (controlled).
 * @param {(text: string) => void} [props.onChangeText] Called on every keystroke.
 * @param {string} [props.placeholder]
 * @param {string} [props.helperText] Hint shown under the input.
 * @param {string} [props.errorText] Replaces the helper text and turns the border to the warning color.
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.secureTextEntry] Hides the text, for passwords.
 * @param {string} [props.testID]
 */
export function TextField({ label, value, onChangeText, placeholder, helperText, errorText, disabled, secureTextEntry, testID, }: {
    label: string;
    value?: string | undefined;
    onChangeText?: ((text: string) => void) | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    errorText?: string | undefined;
    disabled?: boolean | undefined;
    secureTextEntry?: boolean | undefined;
    testID?: string | undefined;
}): import("react").JSX.Element;
