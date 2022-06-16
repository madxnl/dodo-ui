
<template>
  <CrashDialog>
    <NavLayout :items="[
      ...chapters,
    ]">
      <div style="max-width:1100px">
        <h1>DodoUI</h1>
        <h2>Versatile components for Vue</h2>
        <UiFlex column gap=l>
          <template v-for="chapter in chapters">
            <h2 :id="chapter.label">
              {{ chapter.label }}
            </h2>

            <component :is="chapter.component" v-if="chapter.component" />

            <template v-if="chapter.examples">
              <GridResponsive column-width="500px" stretch>
                <UiFlex column align=start pad=m gap=s class="App_Example">
                  <component :is="chapter.examples" />
                </UiFlex>

                <div v-if="chapter.examplesText" class="App_ExampleText">
                  <pre><code>{{ getExampleTemplate(chapter.examplesText) }}</code></pre>
                </div>
              </GridResponsive>
              <br>
            </template>

            <template v-if="chapter.doc?.props?.length">
              <div style="overflow:auto">
              <table>
                <tr>
                  <th width=10%>Prop</th>
                  <th width=25%>Type</th>
                  <th width=35%>Description</th>
                  <th width=30%>Example</th>
                </tr>
                <tr v-for="prop in chapter.doc.props ?? []">
                  <td>
                    <code>{{ prop.name }}<template v-if="!prop.required">?</template></code>

                  </td>
                  <td>
                    <code>{{ getPropType(prop) }}</code>
                  </td>
                  <td>
                    {{ prop.description }}
                    <template v-if="prop.required">(Required)</template>
                  </td>
                  <td>
                    <UiFlex column gap="s">
                      <template v-for="example in prop.tags?.example">
                        <code>{{ (example as any).description }}</code>
                      </template>
                    </UiFlex>
                  </td>
                  <!-- <td>{{ prop }}</td> -->
                </tr>
              </table>
              </div>
            </template>
          </template>
        </UiFlex>
      </div>
    </NavLayout>
  </CrashDialog>
</template>
<script setup lang="ts">
// import FlexDoc from 'docgen:../layout/UiFlex.vue';
import { PropDescriptor } from 'vue-docgen-api';
import ButtonExample1Vue from '../button/ButtonExample1.vue';
import { text as ButtonExample1Text } from '../button/ButtonExample1.vue:docgen';
import { docs as ButtonDoc } from '../button/UiButton.vue:docgen';
import CrashDialog from '../crash/CrashDialog.vue';
import IconExampleVue from '../icon/IconExample.vue';
import { text as IconExampleText } from '../icon/IconExample.vue:docgen';
import { docs as IconDoc } from '../icon/UiIcon.vue:docgen';
// import CrashDialogDoc from 'docgen:../crash/CrashDialog.vue';
// import DialogDoc from 'docgen:../dialog/Dialog.vue';
import GridResponsive from '../layout/GridResponsive.vue';
// import GridResponsiveDoc from 'docgen:../layout/GridResponsive.vue';
import UiFlex from '../layout/UiFlex.vue';
import NavLayout from '../nav/NavLayout.vue';
import DocsInstall from './DocsInstall.vue';

console.log('buttondoc', ButtonDoc)

const chapters = [{
  label: 'Installation',
  href: '#Installation',
  component: DocsInstall
}, {
  label: ButtonDoc.displayName,
  href: '#' + ButtonDoc.displayName,
  doc: ButtonDoc,
  examples: ButtonExample1Vue,
  examplesText: ButtonExample1Text,
}, {
  label: IconDoc.displayName,
  href: '#' + IconDoc.displayName,
  doc: IconDoc,
  examples: IconExampleVue,
  examplesText: IconExampleText,
// }, {
//   label: FlexDoc.displayName,
//   href: '#' + FlexDoc.displayName,
//   doc: FlexDoc
// }, {
//   label: GridResponsiveDoc.displayName,
//   href: '#' + GridResponsiveDoc.displayName,
//   doc: GridResponsiveDoc
// }, {
//   label: DialogDoc.displayName,
//   href: '#' + DialogDoc.displayName,
//   doc: DialogDoc
// }, {
//   label: CrashDialogDoc.displayName,
//   href: '#' + CrashDialogDoc.displayName,
//   doc: CrashDialogDoc
}]

function getPropType(prop: PropDescriptor) {
  let s = ''
  const elements = (prop.type as any)?.elements
  if (elements) s += elements.map((e: any) => e.name).join(' | ')
  else if (prop.type) s += prop.type.name
  return s
}

function getExampleTemplate(source: string) {
  const match = source.match(/template>((.|\s)*)<\/template/)
  return match![1].trim().split('\n  ').join('\n')
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Code+Pro&display=swap');
:root {
  --font-base: 'Inter', sans-serif;
  --font-mono: 'Source Code Pro', monospace;
}
html, body {
  margin: 0;
  height: 100%;
  font-size: 14px;
  line-height: 1.4;
  font-family: var(--font-base);
}
#app {
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow: auto;
}
table {
  border-collapse: collapse;
}
th {
  text-align: left;
  padding: 8px;
}
td {
  border: 1px solid rgba(0,0,0,0.15);
  border-width: 1px 0;
  padding: 8px;
  vertical-align: top;
}
code {
  font-family: var(--font-mono);
}
.App_Example {
  border: 1px solid rgba(0,0,0,0.15);
}
.App_Example {
  border: 1px solid rgba(0,0,0,0.15);
}
.App_ExampleText {
  background: rgba(0,0,0,0.15);
  padding: 16px;
}
pre {
  margin: 0;
  white-space: pre-wrap;
}
</style>
