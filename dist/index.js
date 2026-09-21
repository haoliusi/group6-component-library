// src/components/AppHeader.jsx
import { Pressable, StyleSheet, Text, View } from "react-native";

// src/tokens.js
var tokens = {
  color: {
    ink: "#172033",
    mutedInk: "#526078",
    surface: "#FFFFFF",
    canvas: "#F3F6FB",
    border: "#CBD5E1",
    brand: "#3157D5",
    brandPressed: "#2341A4",
    brandSoft: "#E8EEFF",
    success: "#18794E",
    successSoft: "#E9F8F0",
    warning: "#9A6700",
    warningSoft: "#FFF4CE",
    info: "#2867B2",
    infoSoft: "#E9F2FC",
    white: "#FFFFFF"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32
  },
  radius: {
    sm: 8,
    md: 12,
    pill: 999
  }
};

// src/components/AppHeader.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function AppHeader({
  title,
  subtitle,
  size = "large",
  onBack,
  actionLabel,
  onAction,
  testID
}) {
  const isLarge = size === "large";
  return /* @__PURE__ */ jsxs(View, { style: styles.header, testID, children: [
    /* @__PURE__ */ jsxs(View, { style: styles.topRow, children: [
      onBack ? /* @__PURE__ */ jsx(
        Pressable,
        {
          accessibilityRole: "button",
          accessibilityLabel: "Go back",
          hitSlop: 8,
          onPress: onBack,
          style: ({ pressed }) => [styles.back, pressed ? styles.pressed : void 0],
          children: /* @__PURE__ */ jsx(Text, { style: styles.backText, children: "\u2039 Back" })
        }
      ) : /* @__PURE__ */ jsx(View, {}),
      !isLarge ? /* @__PURE__ */ jsx(Text, { accessibilityRole: "header", numberOfLines: 1, style: styles.compactTitle, children: title }) : null,
      actionLabel && onAction ? /* @__PURE__ */ jsx(
        Pressable,
        {
          accessibilityRole: "button",
          hitSlop: 8,
          onPress: onAction,
          style: ({ pressed }) => pressed ? styles.pressed : void 0,
          children: /* @__PURE__ */ jsx(Text, { style: styles.actionText, children: actionLabel })
        }
      ) : /* @__PURE__ */ jsx(View, {})
    ] }),
    isLarge ? /* @__PURE__ */ jsxs(View, { style: styles.largeBlock, children: [
      /* @__PURE__ */ jsx(Text, { accessibilityRole: "header", style: styles.largeTitle, children: title }),
      subtitle ? /* @__PURE__ */ jsx(Text, { style: styles.subtitle, children: subtitle }) : null
    ] }) : null
  ] });
}
var styles = StyleSheet.create({
  header: {
    backgroundColor: tokens.color.surface,
    borderBottomColor: tokens.color.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.md
  },
  topRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 32
  },
  back: {
    paddingVertical: tokens.spacing.xs
  },
  backText: {
    color: tokens.color.brand,
    fontSize: 16,
    fontWeight: "600"
  },
  compactTitle: {
    color: tokens.color.ink,
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    marginHorizontal: tokens.spacing.sm,
    textAlign: "center"
  },
  actionText: {
    color: tokens.color.brand,
    fontSize: 16,
    fontWeight: "600"
  },
  largeBlock: {
    gap: tokens.spacing.xs,
    marginTop: tokens.spacing.sm
  },
  largeTitle: {
    color: tokens.color.ink,
    fontSize: 30,
    fontWeight: "800"
  },
  subtitle: {
    color: tokens.color.mutedInk,
    fontSize: 15
  },
  pressed: {
    opacity: 0.6
  }
});

// src/components/ListItem.jsx
import { Pressable as Pressable2, StyleSheet as StyleSheet2, Text as Text2, View as View2 } from "react-native";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function ListItem({
  title,
  subtitle,
  leadingText,
  trailing = "chevron",
  badgeText,
  onPress,
  testID
}) {
  const initials = (leadingText ?? title ?? "").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxs2(
    Pressable2,
    {
      accessibilityRole: onPress ? "button" : void 0,
      accessibilityLabel: subtitle ? `${title}, ${subtitle}` : title,
      disabled: !onPress,
      onPress,
      testID,
      style: ({ pressed }) => [
        styles2.row,
        pressed && onPress ? styles2.pressed : void 0
      ],
      children: [
        /* @__PURE__ */ jsx2(View2, { style: styles2.avatar, children: /* @__PURE__ */ jsx2(Text2, { style: styles2.avatarText, children: initials }) }),
        /* @__PURE__ */ jsxs2(View2, { style: styles2.body, children: [
          /* @__PURE__ */ jsx2(Text2, { numberOfLines: 1, style: styles2.title, children: title }),
          subtitle ? /* @__PURE__ */ jsx2(Text2, { numberOfLines: 1, style: styles2.subtitle, children: subtitle }) : null
        ] }),
        trailing === "badge" && badgeText ? /* @__PURE__ */ jsx2(View2, { style: styles2.badge, children: /* @__PURE__ */ jsx2(Text2, { style: styles2.badgeText, children: badgeText }) }) : null,
        trailing === "chevron" ? /* @__PURE__ */ jsx2(Text2, { style: styles2.chevron, children: "\u203A" }) : null
      ]
    }
  );
}
var styles2 = StyleSheet2.create({
  row: {
    alignItems: "center",
    backgroundColor: tokens.color.surface,
    borderBottomColor: tokens.color.border,
    borderBottomWidth: StyleSheet2.hairlineWidth,
    flexDirection: "row",
    gap: tokens.spacing.md,
    minHeight: 64,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md
  },
  pressed: {
    backgroundColor: tokens.color.canvas
  },
  avatar: {
    alignItems: "center",
    backgroundColor: tokens.color.brandSoft,
    borderRadius: tokens.radius.pill,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  avatarText: {
    color: tokens.color.brand,
    fontSize: 14,
    fontWeight: "700"
  },
  body: {
    flex: 1,
    gap: 2
  },
  title: {
    color: tokens.color.ink,
    fontSize: 16,
    fontWeight: "600"
  },
  subtitle: {
    color: tokens.color.mutedInk,
    fontSize: 14
  },
  badge: {
    backgroundColor: tokens.color.brand,
    borderRadius: tokens.radius.pill,
    minWidth: 24,
    paddingHorizontal: tokens.spacing.sm,
    paddingVertical: 2
  },
  badgeText: {
    color: tokens.color.white,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center"
  },
  chevron: {
    color: tokens.color.mutedInk,
    fontSize: 24
  }
});

// src/components/TextField.jsx
import { StyleSheet as StyleSheet3, Text as Text3, TextInput, View as View3 } from "react-native";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  helperText,
  errorText,
  disabled = false,
  secureTextEntry = false,
  testID
}) {
  const hasError = Boolean(errorText);
  return /* @__PURE__ */ jsxs3(View3, { style: styles3.wrapper, children: [
    /* @__PURE__ */ jsx3(Text3, { style: styles3.label, children: label }),
    /* @__PURE__ */ jsx3(
      TextInput,
      {
        accessibilityLabel: label,
        accessibilityState: { disabled },
        editable: !disabled,
        onChangeText,
        placeholder,
        placeholderTextColor: tokens.color.mutedInk,
        secureTextEntry,
        testID,
        value,
        style: [
          styles3.input,
          hasError ? styles3.inputError : void 0,
          disabled ? styles3.inputDisabled : void 0
        ]
      }
    ),
    hasError ? /* @__PURE__ */ jsx3(Text3, { style: styles3.errorText, children: errorText }) : helperText ? /* @__PURE__ */ jsx3(Text3, { style: styles3.helperText, children: helperText }) : null
  ] });
}
var styles3 = StyleSheet3.create({
  wrapper: {
    gap: tokens.spacing.xs,
    width: "100%"
  },
  label: {
    color: tokens.color.ink,
    fontSize: 14,
    fontWeight: "600"
  },
  input: {
    backgroundColor: tokens.color.surface,
    borderColor: tokens.color.border,
    borderRadius: tokens.radius.sm,
    borderWidth: 1.5,
    color: tokens.color.ink,
    fontSize: 16,
    minHeight: 48,
    paddingHorizontal: tokens.spacing.md
  },
  inputError: {
    borderColor: tokens.color.warning
  },
  inputDisabled: {
    backgroundColor: tokens.color.canvas,
    opacity: 0.6
  },
  helperText: {
    color: tokens.color.mutedInk,
    fontSize: 13
  },
  errorText: {
    color: tokens.color.warning,
    fontSize: 13,
    fontWeight: "600"
  }
});
export {
  AppHeader,
  ListItem,
  TextField,
  tokens
};
//# sourceMappingURL=index.js.map