import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot, Root } from "react-dom/client";

const queryClient = new QueryClient();
const roots = new WeakMap<HTMLElement, Root>();

export function mount(root: HTMLElement) {
  const componentName = root.dataset.component; // e.g. data-component="Movies"

  const reactRoot = createRoot(root);
  roots.set(root, reactRoot);

  (async () => {
    let Component: React.ComponentType<any> | null = null;

    if (componentName) {
      try {
        // tenta importar dinamicamente ./pages/{componentName}
        // o bundler precisa suportar imports dinâmicos.
        // Nome do arquivo deve corresponder ao export default (ex: pages/Movies.tsx)
        // @ts-ignore
        const mod = await import(`./pages/${componentName}`);
        Component = mod.default;
      } catch (e) {
        // falha ao importar; renderiza nada
        Component = null;
      }
    }

    reactRoot.render(
      <QueryClientProvider client={queryClient}>
        {Component ? <Component /> : null}
      </QueryClientProvider>,
    );
  })();
}

export function mountComponent(
  root: HTMLElement,
  Component: React.ComponentType<any>,
  props: Record<string, any> = {},
) {
  const reactRoot = createRoot(root);
  roots.set(root, reactRoot);

  reactRoot.render(
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>,
  );
}

export function unmount(root: HTMLElement) {
  const r = roots.get(root);
  if (r) {
    r.unmount();
    roots.delete(root);
  }
}

export default { mount, unmount };
