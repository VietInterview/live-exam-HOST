import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../shared/components/base/base.component';
import * as _ from 'underscore';
import { SelectItem } from 'primeng/api';
import { ReportRegister } from './report.decorator';
import { ReportContainerDirective } from './report-container.directive';


@Component({
	moduleId: module.id,
	selector: 'report',
	templateUrl: 'report.component.html'
})
export class ReportComponent extends BaseComponent implements OnInit {

	items: SelectItem[];
	selectedItem: any;
	@ViewChild(ReportContainerDirective) container: ReportContainerDirective;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {
		super();
	}

	ngOnInit() {
        this.items = _.map(ReportRegister.Instance.lookup('exam'), (report)=> {
			return {
				label: this.translateService.instant(report["title"]),
				value: report["component"]
				}
			});
	}

	renderReportComponent(component) {
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
		let viewContainerRef = this.container.viewContainerRef;
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
	}

	selectReport() {
		if (this.selectedItem)
			this.renderReportComponent(this.selectedItem);
	}


}
