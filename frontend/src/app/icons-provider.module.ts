import { NgModule } from '@angular/core';

import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  AppstoreOutline,
  PlusOutline,
  SettingOutline,
  UserOutline,
  GithubOutline,
  LinkedinFill,
  CheckSquareFill,
  ArrowUpOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  AppstoreOutline,
  PlusOutline,
  SettingOutline,
  UserOutline,
  GithubOutline,
  LinkedinFill,
  CheckSquareFill,
  ArrowUpOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
