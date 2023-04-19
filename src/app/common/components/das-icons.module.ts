
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Airplay,
  Bell,
  Bold,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  Edit,
  Eye,
  Facebook,
  Feather,
  FileText,
  Film,
  File,
  Flag,
  Github,
  Grid,
  Key,
  Layout,
  Menu,
  MessageSquare,
  Monitor,
  Move,
  Package,
  Settings,
  Save,
  Tag,
  X,
  TrendingUp,
  Minimize2,
  RotateCw,
  Repeat,
  Server
} from 'angular-feather/icons';



const icons = {

  Airplay,
  Bell,
  Bold,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  Edit,
  Eye,
  Facebook,
  Feather,
  File,
  FileText,
  Film,
  Flag,
  Github,
  Grid,
  Key,
  Layout,
  Menu,
  MessageSquare,
  Minimize2,
  Monitor,
  Move,
  Package,
  Repeat,
  RotateCw,
  Save,
  Server,
  Settings,
  Tag,
  TrendingUp,
  X,

};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ]
})
export class DasIconsModule {
}
