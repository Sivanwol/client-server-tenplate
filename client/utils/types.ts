
import { ComponentClass } from 'react';
import { NextPageContext } from 'next';
import NextApp, { AppContext } from 'next/app';
import { ApplicationState } from '@client/reducers/types';
import { AppStore } from '@client/types';

export interface ThemeProps {
  theme: {
    [key: string]: string | string[];
  };
}

interface PageContext extends NextPageContext {
  store: AppStore;
  isServer: boolean;
}

export declare type CreateStore = (initialState: ApplicationState) => AppStore;

export interface NextAppContext extends AppContext {
  ctx: PageContext;
}

export interface InitStoreOptions {
  initialState: ApplicationState | {};
  ctx?: PageContext;
}

export interface WrapperProps extends NextAppContext {
  initialProps: object;
  initialState: object;
  isServer: boolean;
  pageProps: object;
}

export type GetProductSize = (input: string | string[]) => string;

export type WithRedux = (
  createStore: CreateStore
) => (app: typeof NextApp) => ComponentClass<WrapperProps>;
