
    export type RemoteKeys = 'micro_services_example/button';
    type PackageType<T> = T extends 'micro_services_example/button' ? typeof import('micro_services_example/button') :any;