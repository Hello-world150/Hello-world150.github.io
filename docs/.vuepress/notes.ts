import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const rustNote = defineNoteConfig({
  dir: 'Rust',
  link: '/Rust',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [rustNote],
})
