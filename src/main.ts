console.log("HELLO FROM MAIN");
const components = import.meta.glob("./components/**/*.ts")
for (const path in components) {
    components[path]().then((mod) => {
        console.log(path, mod)
    })
}