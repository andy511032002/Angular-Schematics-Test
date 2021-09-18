/**
 * Joseph Schema
 * Generate a file of JavaScript
 */
declare interface JosephSchematics {
    /**
     * The name of the person
     */
    name: string;
    /**
     * is gay?
     */
    isGay?: boolean;
    /**
     * Generate in specific Angular CLI workspace project
     */
    project?: string;
}
