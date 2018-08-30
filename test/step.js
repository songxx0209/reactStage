const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

window.alert = (msg) => { console.log(msg); };
          window.matchMedia = () => ({});
          window.scrollTo = () => { };