import { AppComponent } from "src/app/app.component";

export interface Column {
    columnDef: string;
    header: string;
    cell: Function;
    isButton?: boolean;
  }