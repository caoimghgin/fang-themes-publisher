# FANG Themes Publisher

This demo imagines a theoretical (dystopian?) world where a company named **FANG** acquires **Facebook**, **Amazon**, **Apple**, **Netflix**, and **Google**. To maximize efficiencies, **FANG** wants to unify all brands under a singular design system, called **FANGORIA**. The design system uses Style Dictionary, Figma plugins and the CTI+ Taxonomy to enable multi-brand/white-label and mode support.

This tutorial will follow the footsteps of the **FANGORIA** Design System team as they meet the challenges to support the needs of five large companies under the **FANG** umbrella.


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
