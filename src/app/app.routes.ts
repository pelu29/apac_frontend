import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Nosotros } from './components/nosotros/nosotros';
import { Contacto } from './components/contacto/contacto';
import { DesMobile } from './components/des-mobile/des-mobile';
import { DesWeb } from './components/des-web/des-web';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'',redirectTo:'/inicio',pathMatch:'full'},
    {path:'inicio',component:Inicio},
    {path:'nosotros',component:Nosotros},
    {path:'contacto',component:Contacto},
    {path:'desweb',component:DesWeb},
    {path:'desmobile',component:DesMobile}
];
