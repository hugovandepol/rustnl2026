export function useData(components: any[]):Record<string, any>
{
    let map = new Map();
    
    components.forEach( (component) =>
    {
        map.set(component.id, component.data);
    });
    return(Object.fromEntries(map));
}
