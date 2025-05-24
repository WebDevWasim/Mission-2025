const searchInput = document.querySelector("body");

const searchInputMutationObserver = new MutationObserver((mutations) => {
  console.log(mutations);
});

searchInputMutationObserver.observe(searchInput, { childList: true });

searchInputMutationObserver.disconnect();
