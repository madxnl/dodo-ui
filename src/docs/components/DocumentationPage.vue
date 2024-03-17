<template>
  <div :class="[$style.NavLayout]">
    <Row :class="$style.bar" justify="end" align="start">
      <Column gap="4" padding="4" align="start">
        <Column v-for="(chapter, i) in chapters" :key="i" gap="0">
          <span v-if="chapter.title" :class="$style.chapterTitle">
            {{ chapter.title }}
          </span>

          <template v-for="page in chapter.pages" :key="page.title">
            <a :href="`#${page.title}`" :class="[$style.pageLink, isActive(page.title) && $style.linkActive]">
              {{ page.title }}
            </a>
          </template>
        </Column>
      </Column>
    </Row>
    <div :class="$style.right">
      <template v-for="chapter in chapters">
        <Column v-for="page in chapter.pages" :id="page.title" :key="page.title" :class="$style.chapter">
          <h2>{{ page.title }}</h2>
          <br />
          <component :is="page.example" v-if="page.example" />
        </Column>
      </template>

      <!-- <Card v-for="page in aichapters" :id="page.title" :key="page.title">
          <Column gap="8">
            <h2>{{ page.title }}</h2>
            <component :is="page.example" v-if="page.example" />
          </Column>
        </Card> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Column, Row } from '@/components'
import type { DefineComponent } from 'vue'
import { getCurrentInstance, onMounted, ref } from 'vue'

const props = defineProps<{
  chapters: {
    title?: string
    pages: {
      title: string
      example: DefineComponent
    }[]
  }[]
}>()

function isActive(title: string) {
  return activeLink.value === title
}

const activeLink = ref('')
const instance = getCurrentInstance()

onMounted(onScroll)

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
  const isFirst = activeLink.value === props.chapters[0]?.pages[0]?.title
  const hash = isFirst ? '' : `#${activeLink.value}`
  if (location.hash !== hash) {
    history.replaceState({}, '', hash || ' ')
  }

  if (instance?.isMounted) requestAnimationFrame(onScroll)
}
</script>

<style module>
.NavLayout {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 64px;
  min-width: 0;
  min-height: 0;
  background: rgba(var(--dodo-rgb-foreground), 0.04);
}
.chapterTitle,
.pageLink {
  color: inherit;
  text-decoration: none;
  font: var(--dodo-font-base);
  font-weight: var(--dodo-weight-bold);
  color: rgb(var(--dodo-rgb-foreground));
  padding: 2px 4px;
  transition: 0.1s all;
}
.chapterTitle {
  opacity: 0.5;
  font-weight: normal;
  font-size: calc(var(--dodo-font-base) + 2px);
}
.pageLink {
  opacity: 0.75;
}
.pageLink:hover {
  opacity: 1;
}
.linkActive {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}
hr {
  margin: 0;
  border-color: rgba(0, 0, 0, 0.15);
  border-right: 0;
}
.bar {
  width: auto;
  position: sticky;
  top: 0;
  overflow: auto;
}
.right {
  overflow: auto;
}
.chapter {
  max-width: 740px;
  font-size: 15px;
  display: grid;
  /* gap: 256px; */
  padding: 128px 0;
}
</style>
