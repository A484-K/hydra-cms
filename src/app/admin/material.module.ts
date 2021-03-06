import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatChipsModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ],
  exports: [MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatChipsModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule
  ]
})
export class MaterialModule { }
