// The following code exports all the models from their respective files.
// This allows for easier imports in other parts of the application.
// This is a common practice in TypeScript to create a single entry point for related modules.
// This file is called `index.ts` to indicate that it is an entry point for the models directory.
// A barrel export file like this is useful for organizing code and making it easier to import multiple modules from a single file.
// The import statements in other files can now be simplified to import from this index file instead of individual model files.
// The export * from './product'; statement re-exports everything from the product module.
export * from './product';