export const pages = Object.entries(import.meta.glob('../pages/**/*.tsx', {eager: true}))
    .map(([path, module]) => {
        const Page = (module as { default: React.ComponentType<any> }).default

        let route = path
            .replace('./pages', '')
            .replace('.tsx', '')
            .replace(/\/index$/, '')
            .replace(/^\./, '')
            .toLowerCase()
        if (route.endsWith('/home')) route = route.replace('/home', '/')
        route = route.replace(/\[(\w+)\]/g, ':$1')
        return {path: route, element: Page}
    })
