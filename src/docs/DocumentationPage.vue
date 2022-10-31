<template>
  <CrashDialog>
    <div :class="$style.NavLayout">
      <Container gap="m" pad="l" :class="$style.bar" overflow="auto" align-content="start">
        <Container v-for="(chapter, i) in chapters" :key="i" gap="xs">
          <span v-if="chapter.title" :class="$style.chapterTitle">
            {{ chapter.title }}
          </span>

          <template v-for="page in chapter.pages" :key="page.title">
            <a :href="`#${page.title}`" :class="[$style.pageLink, isActive(page.title) && $style.linkActive]">
              {{ page.title }}
            </a>
          </template>
        </Container>
      </Container>
      <Container :class="$style.content" overflow="auto">
        <template v-for="chapter in chapters">
          <Container v-for="page in chapter.pages" :id="page.title" :key="page.title" pad="l">
            <Text h1>{{ page.title }}</Text>
            <br>
            <component :is="page.component" />
            <br>
          </Container>
        </template>
      </Container>
    </div>
  </CrashDialog>
</template>
<script lang="ts" setup>
import { ComponentPublicInstance, onBeforeUnmount, onMounted, ref } from 'vue'
import { Container, CrashDialog, Text } from '..'
import { useTheme } from '../theme'

useTheme()

const props = defineProps<{
  chapters: {
    title?: string
    pages: {
      title: string
      component: ComponentPublicInstance
    }[]
  }[]
}>()

function isActive(title: string) {
  return activeLink.value === title
}

const activeLink = ref('')

onMounted(() => {
  // location.href = '' + location.href // scroll to anchor
  const header = document.getElementById(location.href.split('#').slice(1)[0])
  header?.scrollIntoView()

  addEventListener('scroll', onScroll, { passive: true, capture: true })
  addEventListener('popstate', onPopState)
  onScroll()
})

onBeforeUnmount(() => {
  removeEventListener('scroll', onScroll, { capture: true })
  removeEventListener('popstate', onPopState)
})

function onScroll() {
  let visibleMax = -9999
  for (const chapter of props.chapters) {
    for (const page of chapter.pages) {
      const id = page.title
      const header = document.getElementById(id)
      if (!header) continue
      const { top, bottom } = header.getBoundingClientRect()
      let visiblePct = (Math.min(window.innerHeight, bottom) - Math.max(0, top)) / (bottom - top)
      visiblePct = Math.round(visiblePct * 100)
      if (visiblePct > visibleMax) {
        visibleMax = visiblePct
        activeLink.value = id
      }
    }
  }
  history.replaceState({}, '', '#' + activeLink.value)
}

function onPopState(e: Event) {
  const id = location.href.split('#').slice(1)[0]
  const el = document.getElementById(id)
  el?.scrollIntoView()
}

</script>

<style module>
.NavLayout {
  display: flex;
  min-width: 0;
  min-height: 0;
}
.chapterTitle,
.pageLink {
  color: inherit;
  text-decoration: none;
  font: var(--dodo-font-base);
  font-weight: var(--dodo-font-weightSemi);
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
hr {
  margin: 0;
  border-color: rgba(0,0,0,0.15);
  border-right: 0;
}
.content {
  flex: 1 1 0;
}
</style>
