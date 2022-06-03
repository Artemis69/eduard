# Eduard

## Usage

```js
import { DevTools, Console, Info, Resources, Elements } from 'eduard';

const root = document.getElementById('app');

/**
 * For malinajs ^0.7
 * import { mount } from 'malinajs/runtime'
 * const app = mount(root, DevTools, {})
 */
const app = DevTools(root);

app.add({ name: 'Elements', component: Elements })
app.add({ name: 'Console', component: Console })
app.add({ name: 'Resources', component: Resources })
app.add({ name: 'Info', component: Info })
```