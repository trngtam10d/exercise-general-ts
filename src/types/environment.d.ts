export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: 'staging' | 'dev' | 'production';
            APP_URL: string;
        }
    }
}