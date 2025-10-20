import type { MarkdownInstance } from "astro";

export function useData(components: MarkdownInstance<Record<string, any>>[]):Record<string, any>
{
    let map = new Map();
    components.forEach( (component) =>
    {
        const urlParts = component.file.split("/");
        const filename = urlParts[urlParts.length - 1];
        const name = filename.split(".")[0];
        component.frontmatter.slug = component.url;

        map.set(name, component.frontmatter);
    });
    return(Object.fromEntries(map));
}
