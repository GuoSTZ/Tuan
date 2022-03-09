interface ErrorContent {
    img?: string;
    title?: string;
    desc?: string;
}
export interface ErrorConfig {
    [propName: string]: ErrorContent;
}
declare const config: ErrorConfig;
export default config;
