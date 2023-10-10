<template>
  <Column class="dodo-fonts">
    <Row align="stretch" justify="center" style="min-height: 0">
      <Column>
        <template v-for="c of sections" :key="c.__name">
          <a :href="`#${c.__name}`">{{ c.__name?.replace('Docs', '') }} </a>
        </template>
      </Column>
      <!-- <div style="height: 100vh"> -->
      <ScrollContainer>
        <Column>
          <h1>Dodo UI docs</h1>
          <template v-for="c of sections" :key="c.__name">
            <a :href="`#${c.__name}`">
              <h2 :id="c.__name">{{ c.__name?.replace('Docs', '') }}</h2>
            </a>
            <component :is="c" />
            <br />
          </template>
        </Column>
      </ScrollContainer>
      <!-- </div> -->
    </Row>
  </Column>
</template>

<script lang="ts" setup>
import AvatarDocs from '../content/AvatarDocs.vue'
import ButtonDocs from '../content/ButtonDocs.vue'
import CardDocs from '../content/CardDocs.vue'
import ChipDocs from '../content/ChipDocs.vue'
import ColumnDocs from '../content/ColumnDocs.vue'
import DatatableDocs from '../content/DatatableDocs.vue'
import DropdownDocs from '../content/DropdownDocs.vue'
import IconDocs from '../content/IconDocs.vue'
import InputDocs from '../content/InputDocs.vue'
import LabelDocs from '../content/LabelDocs.vue'
import RowDocs from '../content/RowDocs.vue'
import SelectDocs from '../content/SelectDocs.vue'
import TabsDocs from '../content/TabsDocs.vue'
import TooltipDocs from '../content/TooltipDocs.vue'
import { Column, Row, ScrollContainer, useTheme } from '../dodo'

useTheme()

const sections = [
  AvatarDocs,
  ButtonDocs,
  CardDocs,
  ChipDocs,
  ColumnDocs,
  DatatableDocs,
  DropdownDocs,
  IconDocs,
  InputDocs,
  LabelDocs,
  RowDocs,
  SelectDocs,
  TabsDocs,
  TooltipDocs,
]
</script>
<style>
body,
html {
  margin: 0;
  height: 100%;
  display: flex;
}
#app {
  display: flex;
}
</style>
