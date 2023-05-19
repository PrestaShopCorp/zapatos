import type * as pg from 'pg';
import { TsNameTransforms } from '../db/core';
interface SchemaRules {
    [schema: string]: {
        include: '*' | string[];
        exclude: '*' | string[];
    };
}
interface ColumnOptions {
    [k: string]: {
        [k: string]: {
            insert?: 'auto' | 'excluded' | 'optional';
            update?: 'auto' | 'excluded';
        };
    };
}
export interface RequiredConfig {
    db: pg.ClientConfig;
}
export interface OptionalConfig {
    outDir: string;
    outExt: string;
    schemas: SchemaRules;
    debugListener: boolean | ((s: string) => void);
    progressListener: boolean | ((s: string) => void);
    warningListener: boolean | ((s: string) => void);
    customTypesTransform: 'PgMy_type' | 'my_type' | 'PgMyType' | ((s: string) => string);
    columnOptions: ColumnOptions;
    schemaJSDoc: boolean;
    unprefixedSchema: string | null;
    nameTransforms: TsNameTransforms | boolean;
}
export type Config = RequiredConfig & Partial<OptionalConfig>;
export type CompleteConfig = RequiredConfig & OptionalConfig & {
    nameTransforms: TsNameTransforms;
};
export declare const finaliseConfig: (config: Config) => CompleteConfig;
export declare const moduleRoot: () => string;
export {};
