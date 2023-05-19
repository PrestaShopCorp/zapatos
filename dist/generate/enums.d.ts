import * as pg from 'pg';
import type { TsNameTransforms } from '../db';
export type EnumData = {
    [k: string]: string[];
};
export declare const enumDataForSchema: (schemaName: string, transforms: TsNameTransforms, queryFn: (q: pg.QueryConfig) => Promise<pg.QueryResult<any>>) => Promise<EnumData>;
export declare const enumTypesForEnumData: (enums: EnumData) => string;
