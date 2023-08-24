import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleDirectories: ['node_modules', 'test'],
    testMatch: ['**/?(*.)test.ts'],
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
