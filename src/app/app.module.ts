import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { FullAnalysisSubmitComponent } from './full-analysis-submit/full-analysis-submit.component';
import { AttributeSubmitComponent } from './attribute-submit/attribute-submit.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'player/:name', component: PlayerPageComponent},
  {path: 'submitFullAnalysis', component: FullAnalysisSubmitComponent},
  {path: 'submitAttributes', component: AttributeSubmitComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerPageComponent,
    FullAnalysisSubmitComponent,
    AttributeSubmitComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
  ],
  entryComponents: [HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
