
<template>
  <CrashDialog>
    <NavLayout
      :items="[
        ...chapters,
      ]"
    >
      <div style="max-width:1100px">
        <h1>DodoUI</h1>
        <h2>Versatile components for Vue</h2>
        <Container gap="l">
          <template v-for="chapter in chapters" :key="chapter.label">
            <h2 :id="chapter.label">
              {{ chapter.label }}
            </h2>

            <component :is="chapter.component" v-if="chapter.component" />

            <template v-if="chapter.examples">
              <GridResponsive column-width="500px" stretch>
                <Container align="start" pad="m" class="App_Example">
                  <component :is="chapter.examples" />
                </Container>

                <div v-if="chapter.examplesText" class="App_ExampleText">
                  <pre><code>{{ chapter.examplesText }}</code></pre>
                </div>
              </GridResponsive>
              <br>
            </template>

            <template v-if="chapter.doc?.props?.length">
              <div style="overflow:auto">
                <table>
                  <tr>
                    <th width="10%">Prop</th>
                    <th width="25%">Type</th>
                    <th width="35%">Description</th>
                    <th width="30%">Example</th>
                  </tr>
                  <tr v-for="prop in chapter.doc.props ?? []" :key="prop.name">
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
                      <Container gap="s">
                        <template v-for="example in prop.tags?.example" :key="example">
                          <code>{{ (example as any).description }}</code>
                        </template>
                      </Container>
                    </td>
                  <!-- <td>{{ prop }}</td> -->
                  </tr>
                </table>
              </div>
            </template>
          </template>
        </Container>
      </div>
    </NavLayout>
  </CrashDialog>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { PropDescriptor } from 'vue-docgen-api'
import { chapters } from './chapters'
import { Container, CrashDialog, NavLayout, GridResponsive } from '..'

function getPropType(prop: PropDescriptor) {
  let s = ''
  const elements = (prop.type as any)?.elements
  if (elements) s += elements.map((e: any) => e.name).join(' | ')
  else if (prop.type) s += prop.type.name
  return s
}

onMounted(() => {
  const hash = location.hash
  location.hash = ''
  location.hash = hash
})

</script>

<style>
html, body {
  margin: 0;
  height: 100%;
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
