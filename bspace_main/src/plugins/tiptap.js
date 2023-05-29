import { VuetifyTiptap, VuetifyViewer, createVuetifyProTipTap } from 'vuetify-pro-tiptap'
import { BaseKit, Bold, Italic, Underline, Heading, TextAlign, FontFamily, FontSize, BulletList, OrderedList } from 'vuetify-pro-tiptap'
import 'vuetify-pro-tiptap/style.css'

export default createVuetifyProTipTap({
  lang: 'en',
  components: {
    VuetifyTiptap,
    VuetifyViewer
  },
  extensions: [
    BaseKit.configure({
      placeholder: {
        placeholder: 'Enter some text...'
      }
    }),
    Bold,
    Italic,
    Underline.configure({ divider: true }),
    Heading,
    TextAlign,
    FontFamily,
    FontSize,
    BulletList,
    OrderedList,
  ]
})
