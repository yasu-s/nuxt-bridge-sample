import VueCompositionApi from '@vue/composition-api'
import { config, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

Vue.use(VueCompositionApi)

// Vuetify設定
Vue.use(Vuetify)

// Vuex設定
Vue.use(Vuex)

// stubsを全体に設定
config.stubs['nuxt-link'] = RouterLinkStub
