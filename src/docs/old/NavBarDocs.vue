<template>
  <DocsExample :options="{ setup, template }">
    <template #description>
      Todo.
    </template>
  </DocsExample>
</template>
<script setup lang="ts">
import { DocsExample } from '..'
import image from '../assets/placeholder32.png'

/* eslint-disable no-console */
const navigate = () => { console.log('navigate') }
const link = { navigate, isActive: { value: true } }

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
