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

const setup = () => ({ image })

const template = `
<div style="min-height:400px;display:grid;">
  <NavBar>
    <template #navbar-header>
      <NavBarItem text="Organisation Name Here" text-secondary="User Name" important>
        <template #icon><img :src="image"></template>
      </NavBarItem>
    </template>

    <NavBarItem text="Search" icon="search" active />
    <NavBarItem text="Profile" icon="person" />

    <template #navbar-footer>
      <NavBarItem text="Help" icon="help" />
    </template>

    <!-- with vue-router: -->
    <!-- <RouterLink v-slot="link" :to="{ name: 'NavBar' }">
      <NavBarItem text="About" icon="info" :active="link.isActive" />
    </RouterLink> -->

    <template #main>
      <!-- main page content here -->
    </template>
  </NavBar>
</div>`
</script>
