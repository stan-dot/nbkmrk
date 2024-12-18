import React from 'react'

export const defaultTracingRegexes: RegExp[] = [
  /((&|\?)ref=)/ig,
  /((&|\?)mtrref)/ig,
  /((&|\?)utm_medium=)+/gi,
  /(~#text)/ig,
  /((&|\?)utm_source)/ig,
  /((&|\?)utm_campaign)/ig,
];

export default class ExtensionSettings {
  name: string
  constructor(name: string) {
    this.name = name

  }

}
