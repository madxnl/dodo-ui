<template>
  <DocsComponentSection :example="{ setup, template }" :doc="doc">
    <template #description>
      Todo.
    </template>
  </DocsComponentSection>
</template>
<script setup lang="ts">
import image from '../assets/placeholder32.png'
import { DocsComponentSection } from '../docs'
// @ts-ignore
import { DOCGEN as doc } from './NavBar.vue'

/* eslint-disable no-console */
const navigate = () => { console.log('navigate') }
const link = { navigate, isActive: false }

const setup = () => ({ image, link })

const template = `
<div style="min-height:500px;display:grid;">
  <NavBar>
    <template #organisation-icon>
      <img :src="image">
    </template>
    <template #menu-organisation-icon>
      <img :src="image">
    </template>

    <template #navbar-header>
      <NavBarItem text="Organisation Name Here" text-secondary="User Name" important>
        <template #icon><img :src="image"></template>

        <template #submenu>
          <DropdownItem>
            Account settings
          </DropdownItem>
        </template>
      </NavBarItem>
    </template>

    <NavBarItem text="Search" icon="search" :link="link" />
    <NavBarItem text="Profile" icon="person" />

    <template #navbar-footer="{ inMobileBar }">
      <NavBarItem text="Help" icon="help" v-if="!inMobileBar" />
    </template>

    <template #main>
      <!-- main page content here -->
    </template>
  </NavBar>
</div>`
</script>
