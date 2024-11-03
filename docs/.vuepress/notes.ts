import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const testNote = defineNoteConfig({
  dir: 'Test',
  link: '/Test',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [testNote],
})
