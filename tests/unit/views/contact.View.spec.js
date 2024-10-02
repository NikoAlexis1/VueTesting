import { shallowMount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue'

describe('ContactView', () => {
    test('Validación de match con el snapshot', () => {
        const wrapper = shallowMount(ContactView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})