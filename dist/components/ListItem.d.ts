/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {string} [props.leadingText] Text for the avatar circle; defaults to the first two letters of the title.
 * @param {'chevron' | 'badge' | 'none'} [props.trailing] What appears on the right edge.
 * @param {string} [props.badgeText] Shown when trailing is 'badge'.
 * @param {() => void} [props.onPress] Makes the row pressable.
 * @param {string} [props.testID]
 */
export function ListItem({ title, subtitle, leadingText, trailing, badgeText, onPress, testID, }: {
    title: string;
    subtitle?: string | undefined;
    leadingText?: string | undefined;
    trailing?: "none" | "chevron" | "badge" | undefined;
    badgeText?: string | undefined;
    onPress?: (() => void) | undefined;
    testID?: string | undefined;
}): import("react").JSX.Element;
