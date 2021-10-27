import path from "path";
export function resolve(dir: string): string {
    return path.join(__dirname, dir)
}


export function cmdPath(dir: string): string {
    const rootPath = process.cwd()
    return path.join(rootPath, dir)
}