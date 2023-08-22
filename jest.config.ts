import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'test'],
    testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(test).[jt]s'],
    transform: {
        [`^.+\\.tsx?$`]: [
            'ts-jest',
            {
                isolatedModules: true,
            },
        ],
    },
};

export default config;
