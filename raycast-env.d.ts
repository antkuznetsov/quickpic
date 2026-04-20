/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {};

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences;

declare namespace Preferences {
  /** Preferences accessible in the `library` command */
  export type Library = ExtensionPreferences & {};
  /** Preferences accessible in the `add-image` command */
  export type AddImage = ExtensionPreferences & {};
  /** Preferences accessible in the `add-selected-image` command */
  export type AddSelectedImage = ExtensionPreferences & {};
}

declare namespace Arguments {
  /** Arguments passed to the `library` command */
  export type Library = {};
  /** Arguments passed to the `add-image` command */
  export type AddImage = {};
  /** Arguments passed to the `add-selected-image` command */
  export type AddSelectedImage = {
    /** Keywords (comma separated) */
    keywords: string;
    /** Optional title */
    title: string;
  };
}
