import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  campaigns: Campaign[];
  selectedCampaign?: Campaign;
  onSelect(campaign: Campaign): void {
    this.selectedCampaign = campaign;
    this.messageService.add(`CampaignsComponent: Selected campaign id=${campaign.id}`);
  }
  getCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(campaigns => this.campaigns = campaigns);
  }
  constructor(private campaignService: CampaignService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCampaigns();
  }

}
