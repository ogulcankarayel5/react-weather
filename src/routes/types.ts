import React  from 'react';
export interface IRouteConfig {
    key: string;
    path: string;
    component: React.ElementType
    exact?: boolean;
}