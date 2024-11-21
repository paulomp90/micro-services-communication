
    export type RemoteKeys = 'micro_body/app';
    type PackageType<T> = T extends 'micro_body/app' ? typeof import('micro_body/app') :any;