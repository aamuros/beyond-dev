# Design System

Monochrome. Technical. No decoration.

## Palette

```
background       #08090a
background-deep  #050607
surface          #0f1011
surface-raised   #141516
card             #111214
```

```
border        rgba(255, 255, 255, 0.08)
border-strong rgba(255, 255, 255, 0.14)
```

```
text-primary   #f7f8f8
text-secondary #c7cbd1
text-muted     #8a8f98
text-faint     #62666d
```

```
accent       #f7f8f8
accent-hover #ffffff
```

```
success #27a644
warning #f0bf00
error   #eb5757
```

## Rules

- No colorful gradients. No purple. No accent tint.
- Backgrounds are near-black. Surfaces layer up in tight increments.
- Borders are low-contrast white at 8–14% opacity. Never bold.
- Text hierarchy runs white → light gray → muted gray → faint gray.
- Accent color is white. It does not draw attention — structure and contrast do.

## Typography

- Headings: gradient-text, white-to-gray vertical fade. Editorial weight.
- Body: text-secondary. Relaxed line height.
- Labels: text-muted, uppercase, wide tracking, small size.

## Buttons

- Primary: white fill, dark text, subtle border. High contrast.
- Secondary / Outline: transparent, neutral text, border only. Hover brightens border and adds surface fill.
- Ghost: no border, no fill. Text color change on hover.
- Border radius: `rounded-lg`. Not pill-shaped.

## Cards

- `rounded-xl`. Not `rounded-2xl`.
- 1px border at default border opacity.
- Hover: stronger border, slight lift (−0.5), tight shadow. Fast transition (200–300ms).

## Layout

- No glow effects. No radial gradients behind sections.
- Section dividers: 1px horizontal lines with a center fade.
- Generous vertical spacing. Tight horizontal spacing.
- Max content width: 1344px.

## Tone

- Direct. No exclamation marks. No dramatic phrasing.
- Say what the thing is. Not what it's not.
- Every element earns its place. If it doesn't add clarity, remove it.
