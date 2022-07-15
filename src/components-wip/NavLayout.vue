<template>
  <div class="NavLayout" :style="css">
    <Container gap="m" class="NavLayout_bar" scrollable>
      <Container v-for="(chapter, i) in chapters" :key="i" gap="xs">
        <span v-if="chapter.title" class="NavLayout_chapterTitle">
          {{ chapter.title }}
        </span>

        <template v-for="page in chapter.pages" :key="page.href">
          <a :href="page.href" class="NavLayout_pageLink">{{ page.title }}</a>
        </template>
      </Container>
    </Container>
    <Container class="NavLayout_content" scrollable @scroll="onScroll">
      <slot />
    </Container>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import Container from '../components/Container.vue'
import { useTheme } from '../theme'

const props = defineProps<{
  chapters: {
    title?: string
    pages: {
      title: string
      href: string
    }[]
  }[]
}>()

useTheme()

function onScroll(el: HTMLElement) {
  const links = props.chapters.flatMap(c => c.pages).map(p => p.href)
  // const titles = links.map(l => el.
  // const chapters = Array.from(el.querySelectorAll('[data-chapter]'))
  // const activeClass = 'NavLayout_linkActive'
  // chapters.forEach(chapter => chapter.classList.remove(activeClass))
  // const activeChapter = chapters.find(c => c.
  //   chapter.
  // }
  // console.log('scroll', el.scrollTop, el.scrollHeight)
}

const css = computed(() => {
  const s = ''
  return s
})
</script>

<style>
.NavLayout {
  display: flex;
  min-height: 0;
}
.NavLayout_bar {
  padding: 32px;
}
.NavLayout_chapterTitle,
.NavLayout_pageLink {
  color: inherit;
  text-decoration: none;
  font: var(--ui-font);
  font-weight: 500;
  color: var(--color-foreground);
}
.NavLayout_pageLink {
  color: var(--color-muted);
}
.NavLayout_pageLink:hover {
  color: var(--color-foreground);
}
.NavLayout_pageLink:nth-child(3) {
  color: var(--color-foreground);
  font-weight: bold;
}
hr {
  margin: 0;
  border-color: rgba(0,0,0,0.15);
  border-right: 0;
}
.NavLayout_content {
  flex: 1;
  padding: 32px;
}
</style>
