<template>
  <div class="NavLayout" :style="css">
    <Container gap="m" pad="l" class="NavLayout_bar" overflow="auto" align="start">
      <Container v-for="(chapter, i) in chapters" :key="i" gap="xs">
        <span v-if="chapter.title" class="NavLayout_chapterTitle">
          {{ chapter.title }}
        </span>

        <template v-for="page in chapter.pages" :key="page.href">
          <a :href="page.href" class="NavLayout_pageLink">{{ page.title }}</a>
        </template>
      </Container>
    </Container>
    <Container class="NavLayout_content" overflow="auto">
      <slot />
    </Container>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, ref } from 'vue'
import Container from '../components/Container.vue'
import { useTheme } from '../theme'

// const props = defineProps<{
defineProps<{
  chapters: {
    title?: string
    pages: {
      title: string
      href: string
    }[]
  }[]
}>()

useTheme()

const observers = ref<IntersectionObserver[]>([])
// const pageVisibility = ref<Record<string, number>>({})

// function getScrollParent(el: Element): Element {
//   return el.scrollHeight > el.clientHeight ? el : getScrollParent(el)
// }

// watchEffect(() => {
//   const links = props.chapters.flatMap(c => c.pages).map(p => p.href)
//   const anchors = links.map(l => l.split('#', 2)[1])
//   const titles = anchors.map(a => document.getElementById(a)!).filter(Boolean)
//   console.log(anchors, titles)
//   const threshold = [0, 0.2, 0.4, 0.6, 0.8, 1]
//   observers.value.forEach(o => o.disconnect())
//   observers.value = titles.map(t => new IntersectionObserver(entries => {
//     entries.forEach(e => { pageVisibility.value[t.id] = e.intersectionRatio })
//   }, { root: getScrollParent(t), threshold }))
// })

onBeforeUnmount(() => {
  observers.value.forEach(o => o.disconnect())
})

// function onScroll(el: HTMLElement) {
//   const links = props.chapters.flatMap(c => c.pages).map(p => p.href)
//   const anchors = links.map(l => l.split('#', 2)[1])
//   const visiblity =
//   const active = titles.reduce((bestEl, el) => {

//   }, null)
// const chapters = Array.from(el.querySelectorAll('[data-chapter]'))
// const activeClass = 'NavLayout_linkActive'
// chapters.forEach(chapter => chapter.classList.remove(activeClass))
// const activeChapter = chapters.find(c => c.
//   chapter.
// }
// console.log('scroll', el.scrollTop, el.scrollHeight)
// }

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
/* .NavLayout_pageLink:nth-child(3) {
  color: var(--color-foreground);
  font-weight: bold;
} */
hr {
  margin: 0;
  border-color: rgba(0,0,0,0.15);
  border-right: 0;
}
.NavLayout_content {
  flex: 1;
}
</style>
