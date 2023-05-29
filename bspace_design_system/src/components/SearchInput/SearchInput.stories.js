import SearchInput from './SearchInput'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Components/Search Input',
    component: SearchInput,
    tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const SearchInputDefault = {
    args: {
        label: 'Search here...'
    },
}