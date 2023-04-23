# FANG Themes Publisher

This demo imagines a dystopian world where the **FANG** corporation acquires **Facebook**, **Amazon**, **Apple**, **Netflix**, and **Google**. To maximize efficiencies, **FANG Corp** wants to unify all brands under a singular design system, called **FANGORIA**. The design system will use [Style Dictionary](https://github.com/amzn/style-dictionary), Figma plugins and the [CTI+ Taxonomy](https://medium.com/user-experience-design-1/how-to-name-tokens-in-a-design-system-5b218589dadc) to enable support for cross-brand/white-label, multi-platform, and dark mode.

The problem is **FANG Corp** hasn't built the **FANGORIA** design system and time is running out!

This tutorial will follow the team responsible for the success of **FANGORIA** as they meet the challenges to support the integration of five large companies under the singular **FANG** umbrella.

**Notice**: *Feel free to use this code as reference, or clone it and tailor it to your needs. This demo combines many Medium articles I've written over the years on design systems. However, the inpiration for this demo is from [How to manage your Design Tokens with Style Dictionary](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa), written by Cristiano Rastelli in 2020.*

## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
The project is made of these files and folders:

* `/app` contains the build.js, configurations for platforms, and utilities
* `/cti+` extensions for CTI+ parsers/transforms, and schema files
* `/tokens` contains the design tokens input files (in JSON format)
* `/build` contains the generated output files (in different formats)

```
├── README.md
├── config.json
├── app/
│   ├── configuration/
│      ├── platforms/
│          ├── android.js
│          ├── css.js
│          ├── objc.js
│          ├── scss.js
│          ├── swift.js
│       ├── index.js
│   ├── build.js
│   ├── utilities.js
├── build/
│   ├── amzn/
│       ├── android/...
│       ├── css/...
│       ├── objc/...
│       ├── scss/...
│       ├── scss/...
│   ├── appl/
│       ├── android/...
│       ├── css/...
│       ├── objc/...
│       ├── scss/...
│       ├── scss/...
│   ├── fb/
│       ├── android/...
│       ├── css/...
│       ├── objc/...
│       ├── scss/...
│       ├── scss/...
│   ├── goog/
│       ├── android/...
│       ├── css/...
│       ├── objc/...
│       ├── scss/...
│       ├── scss/...
│   ├── nflx/
│       ├── android/...
│       ├── css/...
│       ├── objc/...
│       ├── scss/...
│       ├── scss/...
├── cti+/
│   ├── extensions/
│      ├── parsers/
│          ├── utilities/
│              ├── ctiPlusSchemaParser.js
│              ├── keyRouteParser.js
│              ├── tokensJsonParser.js
│          ├── index.js
│      ├── transforms/
│          ├── utilities/
│              ├── console.cti+.schemas.js
│              ├── console.cti+.tokens.js
│              ├── name.cti+.camel.js
│              ├── name.cti+.kebob.js
│              ├── name.cti+.pascal.js
│              ├── name.cti+.snake.js
│          ├── index.js
│      ├── schemas/
│          ├── fang/
│             ├── contextual.js
│             ├── palette.js
│             ├── size.js
│      ├── index.js
│      ├── constants.js
│      ├── mapper.js
│      ├── utilities.js
├── tokens/
│   ├── amzn/
│       ├── tokens.json
│   ├── appl/
│       ├── tokens.json
│   ├── fb/
│       ├── tokens.json
│   ├── goog/
│       ├── tokens.json
│   ├── nflx/
│       ├── tokens.json
```

## Running the project
You can build the design tokens from the `/app` folder using the CLI command:

```
npm run build
```

The generated tokens are saved in the `/build` folder, and organised by brand/platform.

## License

This project is under [MIT license](https://github.com/didoo/style-dictionary-demo/blob/master/LICENSE).

