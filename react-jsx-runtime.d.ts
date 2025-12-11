declare module 'react/jsx-runtime' {
  import * as React from 'react';
  
  export namespace JSX {
    type ElementType = React.JSX.ElementType;
    interface Element extends React.JSX.Element {}
    interface ElementClass extends React.JSX.ElementClass {}
    interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends React.JSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends React.JSX.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }

  export function jsx(
    type: React.JSX.ElementType,
    props: unknown,
    key?: React.Key,
  ): React.ReactElement;

  export function jsxs(
    type: React.JSX.ElementType,
    props: unknown,
    key?: React.Key,
  ): React.ReactElement;

  export const Fragment: React.ComponentType<React.PropsWithChildren>;
}