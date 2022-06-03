import "./reset.css";

import { DevTools, Console, Info, Resources, Elements } from 'eduard';

const root = document.getElementById('app');

// 0.7
// import { mount } from 'malinajs/runtime'
// let app = mount(root, DevTools, {})

const app = DevTools(root);

app.add({ name: 'Elements', component: Elements })
app.add({ name: 'Console', component: Console })
app.add({ name: 'Resources', component: Resources })
app.add({ name: 'Info', component: Info })