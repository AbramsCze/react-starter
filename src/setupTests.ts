import 'raf/polyfill'
import { configure } from 'enzyme' 
import Adapter from 'enzyme-adapter-react-16' 

if (typeof URL.createObjectURL === 'undefined') {
  Object.defineProperty(URL, 'createObjectURL', { value: () => {} })
}

configure({ adapter: new Adapter() })
