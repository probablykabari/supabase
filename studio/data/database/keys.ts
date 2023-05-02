export const databaseKeys = {
  schemaList: (projectRef: string | undefined) => ['projects', projectRef, 'schemas'] as const,
  schema: (projectRef: string | undefined, id: string | undefined) =>
    ['projects', projectRef, 'schemas', id] as const,
}