export function setStatus(text: string) {
  const el = document.getElementById("status");
  if (el) el.textContent = text;
}

