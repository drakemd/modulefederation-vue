import Tabs from './Tabs.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        items: Array
    }
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const DefaultTabs = {
    args: {
        items: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'],
        color: 'primary'
    },
}
