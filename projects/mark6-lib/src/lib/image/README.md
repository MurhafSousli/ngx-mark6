# Mark6Image Component

## API

| Name              | Description                            |
| ----------------- | -------------------------------------- |
| [src]             | Image src path                         |
| [alt]             | Image alt attribute                    |
| [loadingTemplate] | Custom loading template (placeholder)  |
| [errorTemplate]   | Custom error template                  |
| (error)           | Stream that emits when an error occurs |

# LazyImage Directive

This directive is used to lazy load image (async)

## API

| Name          | Description                            |
| ------------- | -------------------------------------- |
| [lazyImage]   | Image src path                         |
| (loadSuccess) | Stream that emits when an error occurs |
| (loadFailed)  | Stream that emits when an error occurs |
