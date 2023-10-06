import { defineRule, configure } from 'vee-validate'
import * as rules from '@vee-validate/rules'

interface FieldContext {
  field: string
  values: any
}

export default defineNuxtPlugin((nuxtApp) => {
  Object.keys(rules)
    .filter((k) => k !== 'default')
    .forEach((rule) => {
      defineRule(rule, rules[rule])
    })
  configure({
    generateMessage: (context: FieldContext) => {
      context.values._field_ = nuxtApp.vueApp.i18n.t(context.field)
      context.values.target = nuxtApp.vueApp.i18n.t(context.values.target)
      return nuxtApp.vueApp.i18n.t(
        `validation.messages.${context.values._rule_}`,
        context.values
      )
    },
  })
})
