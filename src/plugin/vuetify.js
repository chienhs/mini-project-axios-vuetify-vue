import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' 
import {createVuetify} from "vuetify"

import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import * as labsComponents from 'vuetify/labs/components'


import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components:{
        ...components,
        ...labsComponents,
    },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
})
export default vuetify

