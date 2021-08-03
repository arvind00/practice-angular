# Load the root component in index.html
* Note that index.html is the only html page we load for our SPA
* And in here load only the root component
* Include the custom tag of your root component here, in order to load  your app.
* Don't worry about the root component now, we'll create it in the upcoming tutorials

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <base href="/">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Simple App</title>
</head>
<body>
  <app-root>Loading App...</app-root>
</body>
</html>
```
Note:
* __app-root__ is the value of selector provided in app.component.ts