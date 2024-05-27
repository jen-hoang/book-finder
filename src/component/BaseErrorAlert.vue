<script setup>
import BaseIcon from './BaseIcon.vue';
import { onErrorCaptured, ref } from 'vue';
import { useBooleanRef } from '@/composable/use-ref';

const { value: showAlert, setTrue: displayAlert, setFalse: closeAlert } = useBooleanRef();

const errMessage = ref('error');
const alertTimeout = ref(null);
const clearAlertTimeout = () => {
  // clear alert timeout
  if (alertTimeout.value) {
    clearTimeout(alertTimeout);
    alertTimeout.value = null;
  }
};
const addAlertTimeout = () => {
  clearAlertTimeout();
  alertTimeout.value = setTimeout(closeAlert, 3000);
};

onErrorCaptured((err) => {
  if (err instanceof Error) {
    errMessage.value = err.message;
    displayAlert();
    addAlertTimeout();
  }
});
</script>
<template>
  <div>
    <slot></slot>
    <Transition name="slide-in">
      <div :class="[$style['alert'], 'rounded']" v-if="showAlert" s>
        <p class="text-body-medium">
          {{ errMessage }}
        </p>
        <base-icon name="close" @click="closeAlert" />
      </div>
    </Transition>
  </div>
</template>
<style module>
.alert {
  position: absolute;
  bottom: 5vh;
  left: 6.4rem;
  width: 100%;
  z-index: 1000;
  max-width: 38.4rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-error-background);
  border: 0.1rem solid var(--color-secondary-500);
  color: var(--color-secondary-700);
  box-shadow: 0.6rem 0.6rem var(--color-secondary-500);
  padding-block: 1.6rem;
  padding-inline: 2.4rem;
}
@media (max-width: 992px) {
  .alert {
    left: 3.2rem;
  }
}
@media (max-width: 780px) {
  .alert {
    left: 2.4rem;
  }
}
@media (max-width: 576px) {
  .alert {
    left: 1.2rem;
  }
}
</style>
