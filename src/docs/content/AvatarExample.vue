<template>
  <Container align="start">
    <Row wrap>
      <Avatar text="Sam" />
      <Avatar text="Jane Doe" />
      <Avatar text="Mary Sue" />
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="D" />
      <Avatar text="H" />
      <Avatar text="H H" />
      <Avatar text="H I" />
      <Avatar text="H J" />
      <Avatar text="Foo" :image="imgUrl" />
    </Row>
  </Container>
</template>
<script lang="ts" setup>
import { Avatar, Container, Row } from '../..'
import imgUrl from '../assets/placeholder32.png'

</script>
