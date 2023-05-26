import { Component, OnInit } from '@angular/core';
import { PlmasterService } from './shared/services/plmaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'polesFrontEnd';

  constructor(private plMasterService: PlmasterService){}

  async ngOnInit(): Promise<void> {
    let result = await this.plMasterService.getCaseListOfLawyerAsync();
    console.table(result);
  }

}
