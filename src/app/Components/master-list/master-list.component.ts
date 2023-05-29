import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { PlmasterService } from 'src/app/shared/services/plmaster.service';

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.scss']
})
export class MasterListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'ticketnumber', 'place'
  , 'houseNumber', 'streetName', 'latitude', 'logitude', 'code'
  , 'crew', 'address', 'date', 'week', 'teckAmount'
  , 'rquAmount', 'appAmount', 'paidAmount'];
  
  dataSource: MatTableDataSource<Pole> = new MatTableDataSource<Pole>();
  selection = new SelectionModel<Pole>(true, []);

  constructor(private plMasterService: PlmasterService){ }

  async ngOnInit(): Promise<void> {    
    let poles: Pole[] = await this.plMasterService.getCaseListOfLawyerAsync();
    this.dataSource = new MatTableDataSource<Pole>(poles); 
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }
  
      this.selection.select(...this.dataSource.data);
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Pole): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }

      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
}

export interface Pole {
  id: number;
  ticketnumber: string;
  place: string;
  houseNumber: string;
  streetName: string;
  latitude: number;
  logitude: number;
  code: string;
  crew: string;
  address: string;
  date: string;
  week: number;
  teckAmount: number;
  rquAmount: number;
  appAmount: number;
  paidAmount: number;
}