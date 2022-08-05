<template>
  <Container align="start">
    <Row wrap>
      <Avatar text="Image" :image="imgUrl" />
      <Avatar text="A" />
      <Avatar text="B" />
      <Avatar text="C" />
      <Avatar text="Social.com" />
      <Avatar text="J K" />
      <Avatar text="K L" />
      <Avatar text="L M" />
      <Avatar text="M N" round />
      <Avatar text="N O" round />
      <Avatar text="?" round />
    </Row>
  </Container>
</template>
<script lang="ts" setup>
import { Avatar, Container, Row } from '../..'
import imgUrl from '../assets/placeholder32.png'

</script>
