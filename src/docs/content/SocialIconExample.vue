<template>
  <Container gap="l" align="start">
    <Row>
      <SocialIcon name="google" />
      <SocialIcon name="twitter" />
      <SocialIcon name="slack" />
      <SocialIcon name="facebook" />
      <SocialIcon name="linkedin" />
      <SocialIcon name="whatsapp" />
    </Row>
    <Row>
      <Button variant="solid" color="info">
        <SocialIcon name="google" white />
        <SocialIcon name="twitter" white />
        <SocialIcon name="facebook" white />
        <SocialIcon name="linkedin" white />
        <SocialIcon name="slack" white />
      </Button>
    </Row>
  </Container>
</template>
<script lang="ts" setup>
import { Button, Container, Row, SocialIcon } from '../..'
</script>
