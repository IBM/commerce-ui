import { BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HelpLinksComponent } from './help-links/help-links.component';
import { IconModule } from 'carbon-components-angular';

// AoT requires an exported function for factories
export function HttpTranslateLoader(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        IconModule
    ],
    declarations: [BreadcrumbComponent, HelpLinksComponent],
    exports: [
        CommonModule,
        BreadcrumbComponent,
        HelpLinksComponent
    ],
    providers: [
        TranslateService
    ]
})
export class ComponentsModule { }

