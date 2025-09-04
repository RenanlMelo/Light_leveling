export function navigate(path: string) {
  window.history.pushState({}, "", path);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
}
