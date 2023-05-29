import pinia from "./pinia"
import tiptap from "./tiptap"
import vuetify from "./vuetify"

export function registerPlugins (app) {
    app.use(vuetify)
    app.use(pinia)
    app.use(tiptap)
}
