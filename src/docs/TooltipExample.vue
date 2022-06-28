<template>
  <Row gap="s" wrap>
    <Tooltip text="Tooltip example text">
      <Button>
        Tooltip
      </Button>
    </Tooltip>
  </Row>
  <Row gap="s" wrap>
    <Tooltip :text="`Long tooltip example. `.repeat(20)">
      <Button>
        Tooltip
      </Button>
    </Tooltip>
  </Row>
  <Row gap="s" wrap>
    <Tooltip :text="`Long tooltip example. `.repeat(20)" side="right">
      <Button>
        Tooltip
      </Button>
    </Tooltip>
  </Row>
</template>
<script lang="ts" setup>
import { Row, Button, Tooltip } from '..'
</script>
