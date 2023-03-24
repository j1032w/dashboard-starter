import {NgModule} from '@angular/core';
import {FeatherModule} from 'angular-feather';
import {
  Airplay,
  Bell, Bold,
  Camera,
  ChevronDown,
  ChevronLeft, Edit, Eye, Facebook, Feather, FileText,
  Film, Flag,
  Github,
  Grid,
  Heart, Key, Layout, Menu,
  Monitor, Move,
  Package, PieChart, TrendingUp
} from 'angular-feather/icons';



const icons = {


  Airplay,
  Bell,
  Bold,
  ChevronDown,
  ChevronLeft,
  Edit,
  Eye,
  Facebook,
  Feather,
  FileText,
  Film,
  Flag,
  Github,
  Grid,
  Key,
  Monitor,
  Move,
  Package,
  TrendingUp,
  Layout,
  Menu,



};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ]
})
export class DasIconsModule {
}
