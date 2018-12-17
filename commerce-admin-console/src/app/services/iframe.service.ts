import { Injectable } from '@angular/core';

@Injectable()
export class IframeService {

  parentEventHandler(e){
    var message = e.data;
    // use dispatch here to propagate iframe messages
  }

  subscribeParentPostedMessages(){
    window.addEventListener('message', this.parentEventHandler, false);
  }

  sendMessagesToContainer(msg: any){
    window.parent.postMessage(msg, '*');
  }

  postStatusMsg(content: any,  statusType: any){
    // statusTypes are 'error' or 'success'
    if (statusType === 'error' || statusType === 'success'){
      var params: any = {};
      params['statusType'] = statusType.toString();
      params['statusContent'] = content.toString();
      var messageBody: any = {};
      messageBody['action'] = 'POST_STATUS';
      messageBody['data'] = params;
      this.sendMessagesToContainer(messageBody);
    }
  }

  startProgressIndicator() {
    let header = {};
    header['action'] = "START_PROGRESS_INDICATOR";
    this.sendMessagesToContainer(header);
  }

  stopProgressIndicator() {
    let header = {};
    header['action'] = "STOP_PROGRESS_INDICATOR";
    this.sendMessagesToContainer(header);
  }

}
