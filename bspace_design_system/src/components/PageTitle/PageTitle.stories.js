import PageTitle from './PageTitle'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Components/Page Title',
    component: PageTitle,
    tags: ['autodocs']
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Title = {
    args: {
        title: 'My Dashboard'
    },
}