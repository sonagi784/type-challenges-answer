type MyAwaited<T extends Promise<unknown>> =
  T extends Promise<infer ExampleType>
    ? ExampleType extends Promise<unknown> ? MyAwaited<ExampleType> : ExampleType
    : never
