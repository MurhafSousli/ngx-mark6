# Mark6Image Component

## API

| Name              | Description                            |
| ----------------- | -------------------------------------- |
| [src]             | Image src path                         |
| [alt]             | Image alt attribute                    |

**How to set custom aspect ratio?**

Use SCSS variable `--aspect-ratio-h` and `--aspect-ratio-w`

```xml
<mark6-image class="custom-aspect-ratio" [src]="user.avatarURL" [alt]="user.displayName"></mark6-image>
```

```scss
.custom-aspect-ratio {
  --aspect-ratio-h: 1;
  --aspect-ratio-w: 2;
}
```

# LazyImage Directive

This directive is used to lazy load image (async)

## API

| Name          | Description                            |
| ------------- | -------------------------------------- |
| [lazyImage]   | Image src path                         |
| (loadSuccess) | Stream that emits when an error occurs |
| (loadFailed)  | Stream that emits when an error occurs |
