const handleScroll = (callback) => (element) => {
  if (!element || !element.target) return;
  const target = element.target;
  const { scrollTop, scrollHeight, clientHeight } = target;
  const isBottom = scrollTop + clientHeight >= scrollHeight;
  if (isBottom && typeof callback == 'function') {
    callback();
  }
};

export { handleScroll };
