import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Campaign } from './campaign';
import { CAMPAIGNS } from './mock-campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(private messageService: MessageService) { }
  
  getCampaigns(): Observable<Campaign[]> {
    const campaigns = of(CAMPAIGNS);
    this.messageService.add('CampaignService: Fetched Campaigns');
    return campaigns;
  }
}
