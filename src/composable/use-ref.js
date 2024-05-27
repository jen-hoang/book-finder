import { ref } from 'vue';

const useRefHelper = (initialValue) => {
  const refVal = ref(initialValue);
  const setValue = (value) => () => {
    refVal.value = value;
  };
  const setDirectValue = (value) => {
    refVal.value = value;
  };
  return { value: refVal, setValue, setDirectValue };
};

/**
 * Composition function to create a boolean ref with two methods to set the value to true or false.
 * @param {boolean} initialValue
 * @param {function} trueCb: callback function when value is true
 * @param {function} falseCb: callback function when value is false
 * @returns {object} { value, setTrue, setFalse }
 */
const useBooleanRef = (initialValue = false) => {
  const { value, setValue } = useRefHelper(initialValue);
  const setTrue = setValue(true);
  const setFalse = setValue(false);
  return { value, setTrue, setFalse };
};

/**
 * Active index of a list of items.
 * @param {number | string} initialValue
 * @returns {object} { value, setIndex, resetIndex }
 */
const useActiveIndexRef = (initialValue = -1) => {
  const { value, setValue, setDirectValue: setIndex } = useRefHelper(initialValue);
  const resetIndex = () => setValue(initialValue);
  return { value, setIndex, resetIndex };
};

const useScrollListRef = (initialValue = []) => {
  const list = ref(initialValue);
  const addItem = (items) => {
    list.value = list.value.concat(items);
  };
  const resetList = () => {
    list.value = [];
  };
  return {
    list,
    addItem,
    resetList,
  };
};
export { useBooleanRef, useActiveIndexRef, useScrollListRef };
