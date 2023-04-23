# FANG Themes Publisher

This demo imagines a dystopian world where the **FANG** corporation acquires **Facebook**, **Amazon**, **Apple**, **Netflix**, and **Google**. To maximize efficiencies, **FANG Corp** wants to unify all brands under a singular design system, called **FANGORIA**. The design system will use Style Dictionary, Figma plugins and the CTI+ Taxonomy to enable support for cross-brand/white-label, multi-platform, and dark mode.

The only problem is they haven't built the **FANGORIA** design system yet and time is running out!

This tutorial will follow the team responsible for the success of **FANGORIA** as they meet the challenges to support the integration of five large companies under the singular **FANG** umbrella.

**Notice**: *Feel free to use this code as reference, or clone it and tailor it to your needs. This demo combines the information from many Medium articles I've written.*

## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
The project is made of these files and folders:

* `/app` contains the configuration files and build.js
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

