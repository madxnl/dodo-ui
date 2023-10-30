<Column>
  <SidebarLayout>
    <template #sidebar>
      <MenuNavRenderer :menu="menu" />
    </template>
    <Row align="stretch" justify="center" style="min-height: 0">
      <Column gap="32">
        <Column gap="8" :class="$style.section">
          <a href="#DodoUI" class="dodo-color-foreground">
            <h1 id="DodoUI">Dodo UI</h1>
          </a>
          <img :src="birdSvg" alt="A bird" height="150">
        </Column>
        <Column gap="8" :class="$style.section">
          <a href="#Components" class="dodo-color-foreground">
            <h1 id="Components">Components</h1>
          </a>
          <p>
            The following components are available:
          </p>
        </Column>
        <template v-for="c,i of sections" :key="c.__name">
          <Column gap="8" :class="$style.section">
            <a :href="`#${c.__name}`" class="dodo-color-foreground">
              <h2 :id="c.__name">{{ c.__name?.replace('Docs', '') }}</h2>
            </a>
            <Column>
              <component :is="c" />
            </Column>
          </Column>
        </template>
      </Column>
    </Row>
  </SidebarLayout>
</Column>

<script lang="ts" setup>
import AvatarDocs from './content/AvatarDocs.vue'
import ButtonDocs from './content/ButtonDocs.vue'
import CardDocs from './content/CardDocs.vue'
import ChipDocs from './content/ChipDocs.vue'
import ColumnDocs from './content/ColumnDocs.vue'
import DatatableDocs from './content/DatatableDocs.vue'
import DropdownDocs from './content/DropdownDocs.vue'
import IconDocs from './content/IconDocs.vue'
import InputDocs from './content/InputDocs.vue'
import LabelDocs from './content/LabelDocs.vue'
import RowDocs from './content/RowDocs.vue'
import SelectDocs from './content/SelectDocs.vue'
import TabsDocs from './content/TabsDocs.vue'
import TooltipDocs from './content/TooltipDocs.vue'
import { Column, Row, useTheme } from './dodo'
import { SidebarLayout, MenuNavRenderer } from './components'
import { useSinglepageNav } from './composables'
import birdSvg from './bird.svg'

useTheme()

const { menu } = useSinglepageNav({ selector: 'h2' })

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
<style module>
.section {
  margin-bottom: 250px;
}
.separator {
  font-size: 64px;
  margin: auto;
}
</style>
