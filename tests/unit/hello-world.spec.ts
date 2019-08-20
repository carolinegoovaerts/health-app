import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

// TODO extract 'controller' logic, try:
// unit test = purely typescript (component) test, no need for Webpack, @vue/test-utils, etc. (fast/cheap)
// e2e test = template + script (= import unit tested component) + style (slow/expensive)
describe('HelloWorld.vue', () => {
   it('renders props.msg when passed', () => {
      const msg = 'new message';
      const wrapper = shallowMount(HelloWorld, {
         propsData: {msg},
      });
      expect(wrapper.text()).to.include(msg);
   });
});
