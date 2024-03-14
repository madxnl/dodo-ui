<template>
  <div :class="[$style.NavLayout]">
    <Column gap="4" padding="4" :class="$style.bar" align="start">
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
    <ScrollContainer :class="$style.scroll">
      <Column :class="$style.content" padding="4" gap="16">
        <template v-for="chapter in chapters">
          <Card v-for="page in chapter.pages" :id="page.title" :key="page.title">
            <h2>{{ page.title }}</h2>
            <component :is="page.example" v-if="page.example" />

            <!-- <PropsTable v-if="page.api" :doc="page.api" /> -->
            <!-- <br /> -->
          </Card>
        </template>

        <!-- <Card v-for="page in aichapters" :id="page.title" :key="page.title">
          <Column gap="8">
            <h2>{{ page.title }}</h2>
            <component :is="page.example" v-if="page.example" />
          </Column>
        </Card> -->
      </Column>
    </ScrollContainer>
  </div>
</template>
<script lang="ts" setup>
import type { DefineComponent } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Card, Column, ScrollContainer } from '..'

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

onMounted(() => {
  const id = decodeURIComponent(location.href.split('#').slice(1)[0])
  const header = document.getElementById(id)
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

function onPopState(_: Event) {
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
}
.scroll {
  flex-grow: 1;
}
.content {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
../../dist/types
