const handleScroll = (callback) => (element) => {
  const target = element.target;
  if (!target) return;
  const { scrollTop, scrollHeight, clientHeight } = target;
  const isBottom = scrollTop + clientHeight >= scrollHeight - 100;
  if (isBottom && typeof callback == 'function') {
    callback();
  }
};

export { handleScroll };
