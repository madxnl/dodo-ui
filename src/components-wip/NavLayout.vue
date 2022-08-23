<template>
  <div :class="$style.NavLayout">
    <Container gap="m" pad="l" :class="$style.bar" overflow="auto" align="start">
      <Container v-for="(chapter, i) in chapters" :key="i" gap="xs">
        <span v-if="chapter.title" :class="$style.chapterTitle">
          {{ chapter.title }}
        </span>

        <template v-for="page in chapter.pages" :key="page.title">
          <RouterLink
            :to="{ hash: '#' + page.title }" :class="[
              $style.pageLink,
              route.hash === '#' + page.title && $style.linkActive
            ]"
          >
            {{ page.title }}
          </RouterLink>
        </template>
      </Container>
    </Container>
    <Container :class="$style.content" overflow="auto">
      <slot />
    </Container>
  </div>
</template>
<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router'
import Container from '../components/Container.vue'
import { useTheme } from '../theme'

useTheme()

const route = useRoute()

defineProps<{
  chapters: {
    title?: string
    pages: {
      title: string
      // href: string
    }[]
  }[]
}>()

</script>

<style module>
.NavLayout {
  display: flex;
  min-height: 0;
}
.chapterTitle,
.pageLink {
  color: inherit;
  text-decoration: none;
  font: var(--dodo-font-family);
  font-weight: 500;
  color: var(--dodo-color-foreground);
}
.pageLink {
  color: rgba(var(--dodo-rgb-foreground), 0.6);
}
.pageLink:hover {
  color: var(--dodo-color-foreground);
}
.linkActive {
  color: black;
}
/* .pageLink:nth-child(3) {
  color: var(--dodo-color-foreground);
  font-weight: bold;
} */
hr {
  margin: 0;
  border-color: rgba(0,0,0,0.15);
  border-right: 0;
}
.content {
  flex: 1;
}
</style>
