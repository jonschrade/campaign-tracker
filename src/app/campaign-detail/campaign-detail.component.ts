import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent implements OnInit {
  @Input() campaign: Campaign;
  constructor() { }

  ngOnInit(): void {
  }

}
