import config from "../config.json";
import { setStatus } from "./utils";

Office.onReady(() => {
  loadSettings();
  bindSave();
});

function loadSettings() {
  const gridSelect = document.getElementById("grid-size") as HTMLSelectElement;
  gridSelect.innerHTML = "";
  config.gridSizes.forEach(size => {
    const opt = document.createElement("option");
    opt.value = size.toString();
    opt.textContent = `${size}px`;
    gridSelect.appendChild(opt);
  });

  (document.getElementById("branding-color") as HTMLInputElement).value = config.branding.primaryColor;
  (document.getElementById("font-family") as HTMLInputElement).value = config.branding.fontFamily;

  setStatus("Settings loaded.");
}

function bindSave() {
  document.getElementById("save-config")?.addEventListener("click", () => {
    config.branding.primaryColor = (document.getElementById("branding-color") as HTMLInputElement).value;
    config.branding.fontFamily = (document.getElementById("font-family") as HTMLInputElement).value;

    const selectedGrid = (document.getElementById("grid-size") as HTMLSelectElement).value;
    config.gridSizes = [parseInt(selectedGrid, 10)];

    localStorage.setItem("eeConfig", JSON.stringify(config));
    setStatus("Settings saved and applied.");
  });
}

