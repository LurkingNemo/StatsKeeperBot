const Campaign=require('../campaign/Campaing')

class User{
    constructor(name){
        this.name=name  
        this.campaigns=new Map()    //<CampaignID, String(role)>
    }

    addCampaign(campaignId, role){
        this.campaigns.set(campaign, role)
    }
}

module.exports=User