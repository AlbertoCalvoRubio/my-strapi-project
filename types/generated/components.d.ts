import type { Attribute, Schema } from '@strapi/strapi';

export interface MetadataMetadata extends Schema.Component {
  collectionName: 'components_metadata_metadata';
  info: {
    displayName: 'Metadata';
    icon: 'apps';
  };
  attributes: {
    category: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'metadata.metadata': MetadataMetadata;
    }
  }
}
