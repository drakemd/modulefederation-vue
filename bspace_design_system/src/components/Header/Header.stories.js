import MyHeader from './HeaderLayout.vue';

export default {
  title: 'Components/Header',
  component: MyHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['docsPage'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      MyHeader,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<MyHeader :user="user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {
  args: {
    user: null,
  },
};
