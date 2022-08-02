<template>
  <div class="NavBarExample">
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

      <!-- With RouterLink:
      <RouterLink v-slot="link" :to="{ name: 'about' }">
        <NavBarItem text="About" icon="info" :active="link.isActive" />
      </RouterLink>
    -->
      <template #main>
        ...
      </template>
    </NavBar>
  </div>
</template>
<script lang="ts" setup>
import { NavBar, NavBarItem } from '../..'
import image from '../assets/placeholder32.png'
</script>
<style>
.NavBarExample {
  min-height: 400px;
  min-width: 800px;
  display: grid;
}
</style>
