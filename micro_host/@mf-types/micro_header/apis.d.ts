
    export type RemoteKeys = 'micro_header/app';
    type PackageType<T> = T extends 'micro_header/app' ? typeof import('micro_header/app') :any;