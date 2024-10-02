import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('HomeView', () => {
    test('Validación de match con el snapshot', () => {
        const wrapper = shallowMount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })
})