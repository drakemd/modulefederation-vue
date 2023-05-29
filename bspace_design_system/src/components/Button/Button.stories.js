import MyButton from './Button.vue'
import { Colors } from '../../constants/constants'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Components/Button',
    component: MyButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
            options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
        },
        color: {
            control: 'color',
        },
        onClick: {},
        size: {
            control: {
                type: 'select',
            },
            options: ['x-small', 'small', 'default', 'large', 'x-large'],
        },
        rounded: {
            control: {
                type: 'select',
            },
            options: ['0', 'xs', 'sm', 'default', 'lg', 'xl'],
        },
        density: {
            control: {
                type: 'select',
            },
            options: ['compact', 'default', 'comfortable'],
        },
    },
}

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Elevated = {
    args: {
        variant: 'elevated',
        label: 'BUTTON',
        color: Colors.primary,
        dark: true
    },
}

export const Flat = {
    args: {
        variant: 'flat',
        label: 'BUTTON',
        color: Colors.primary,
        dark: true
    },
}

export const Tonal = {
    args: {
        variant: 'tonal',
        label: 'BUTTON',
        color: Colors.primary,
    },
}

export const Outlined = {
    args: {
        variant: 'outlined',
        label: 'BUTTON',
        color: Colors.primary,
    },
}

export const Text = {
    args: {
        variant: 'text',
        label: 'BUTTON',
        color: Colors.primary,
    },
}

export const Plain = {
    args: {
        variant: 'plain',
        label: 'BUTTON',
        color: Colors.primary,
    },
}

export const WithIcon = {
    args: {
        label: 'BUTTON',
        color: Colors.primary,
        dark: true,
        prependIcon: 'mdi-trash-can-outline'
    },
}