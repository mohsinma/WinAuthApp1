import { Component, TemplateRef, ViewContainerRef, Inject } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html'
})
export class TestComponent {

  modalRef: BsModalRef;

  baseUrl: string = '/';

  constructor(private modalService: BsModalService,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private _httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  divisionResult: string;

  bsValue: Date = new Date();
  bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];


  logToDb() {
    return this._httpClient.get(this.baseUrl + 'api/SampleData/TestSeriLog').subscribe(result => {
      this.divisionResult = result.toString();
    }, error => console.error(error));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }



  showCustom() {
    this.toastr.custom('<span style="color: red">Hello Form Toaster !!!</span>', null, { enableHTML: true });
  }

  testDate = moment().format('MM/DD/YYYY 00:00:00 a');

  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
}


