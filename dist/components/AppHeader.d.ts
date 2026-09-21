/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.subtitle] Shown only in the large size.
 * @param {'large' | 'compact'} [props.size]
 * @param {() => void} [props.onBack] Shows a Back button when passed.
 * @param {string} [props.actionLabel] Label for the right-side button.
 * @param {() => void} [props.onAction] Shows the right-side button when passed with actionLabel.
 * @param {string} [props.testID]
 */
export function AppHeader({ title, subtitle, size, onBack, actionLabel, onAction, testID, }: {
    title: string;
    subtitle?: string | undefined;
    size?: "large" | "compact" | undefined;
    onBack?: (() => void) | undefined;
    actionLabel?: string | undefined;
    onAction?: (() => void) | undefined;
    testID?: string | undefined;
}): import("react").JSX.Element;
