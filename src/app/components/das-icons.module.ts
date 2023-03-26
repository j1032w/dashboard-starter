import {NgModule} from '@angular/core';
import {FeatherModule} from 'angular-feather';
import {
  Airplay,
  Bell, Bold,
  Camera,
  ChevronDown,
  ChevronLeft, ChevronRight, ChevronsLeft, Edit, Eye, Facebook, Feather, FileText,
  Film, Flag,
  Github,
  Grid,
  Heart, Key, Layout, Menu, MessageSquare,
  Monitor, Move,
  Package, PieChart, Settings, Tag, TrendingUp
} from 'angular-feather/icons';



const icons = {


  Airplay,
  Bell,
  Bold,
  ChevronDown,
  ChevronLeft,
  ChevronsLeft,
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
  MessageSquare,
  Tag,
  Settings,
  ChevronRight



};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ]
})
export class DasIconsModule {
}
