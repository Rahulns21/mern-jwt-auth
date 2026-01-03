const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if (value === undefined) {
        throw new Error(`Missing environment variable ${key}`);
    }

    return value;
}

const getEnvNumber = (key: string, defaultValue?: number): number => {
    const rawValue = process.env[key];

    if (rawValue === undefined) {
        if (defaultValue === undefined) {
            throw new Error(`Missing environment variable ${key}`);
        }
        return defaultValue;
    }

    const parsedValue = Number(rawValue);

    if (Number.isNaN(parsedValue)) {
        throw new Error(`Environment variable ${key} must be a number`);
    }

    return parsedValue;
}

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const PORT = getEnvNumber("PORT", 8000);
export const MONGO_URI = getEnv("MONGO_URI");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const JWT_SECRET = getEnv("JWT_SECRET");
export const JWT_REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");
export const EMAIL_SENDER = getEnv("EMAIL_SENDER");
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");