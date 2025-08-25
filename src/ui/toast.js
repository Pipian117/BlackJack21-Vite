const containerId = "toast-container";

const iconBySeverity = {
  info: "pi pi-info-circle",
  success: "pi pi-check",
  warn: "pi pi-exclamation-triangle",
  error: "pi pi-times",
};

// Colores de respaldo en caso de que el CSS no aplique
const bgBySeverity = {
  info: "linear-gradient(90deg,#3b82f6,#2563eb)",
  success: "linear-gradient(90deg,#16a34a,#059669)",
  warn: "linear-gradient(90deg,#f59e0b,#f97316)",
  error: "linear-gradient(90deg,#ef4444,#dc2626)",
};

/**
 * Muestra un toast de PrimeFlez.
 * @param {{severity?:string, summary?:string, detail?:string, life?:number}} options
 */
export function showToast({
  severity = "info",
  summary = "",
  detail = "",
  life = 3500,
} = {}) {
  console.debug("[toast] showToast called", { severity, summary, detail });

  // obtener o crear contenedor
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    container.className = "toast-container";
    document.body.appendChild(container);
    console.debug("[toast] contenedor creado");
  }

  // crear toast
  const toast = document.createElement("div");
  toast.className = `toast ${severity}`;
  toast.setAttribute("role", "status");
  toast.style.willChange = "transform, opacity";
  toast.style.background = bgBySeverity[severity] || bgBySeverity.info;
  toast.style.color = "#fff";
  toast.style.padding = "0.6rem 0.8rem";
  toast.style.borderRadius = "6px";
  toast.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
  toast.style.minWidth = "240px";
  toast.style.maxWidth = "360px";
  toast.style.display = "flex";
  toast.style.gap = "0.6rem";
  toast.style.alignItems = "center";
  toast.style.transform = "translateX(16px)";
  toast.style.opacity = "0";
  const icon = document.createElement("i");
  icon.className = iconBySeverity[severity] || iconBySeverity.info;
  icon.style.marginRight = "8px";
  icon.style.fontSize = "1.2rem";
  icon.style.flex = "0 0 auto";

  const content = document.createElement("div");
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.gap = "2px";
  content.innerHTML = `<strong style="line-height:1">${summary}</strong><small style="opacity:.95">${detail}</small>`;

  toast.appendChild(icon);
  toast.appendChild(content);

  container.appendChild(toast);

  void toast.offsetWidth;

  // auto-dismiss
  const timeout = setTimeout(() => dismiss(toast), life);

  // cerrar al click
  toast.addEventListener("click", () => {
    clearTimeout(timeout);
    dismiss(toast);
  });

  function dismiss(el) {
    el.style.transition = "all .22s ease";
    el.style.opacity = "0";
    el.style.transform = "translateX(12px)";
    setTimeout(() => el.remove(), 220);
  }

  console.debug(
    "[toast] mostrado, hijos del contenedor:",
    container.children.length
  );

  try {
    const cs = getComputedStyle(toast);
    console.debug("[toast] computed style", {
      opacity: cs.opacity,
      width: cs.width,
      height: cs.height,
      transform: cs.transform,
    });
  } catch (e) {}

  return toast;
}
