import { NgModule, InjectionToken, Inject, ModuleWithProviders } from '@angular/core';

export const NUMBER: InjectionToken<number> = new InjectionToken<number>('@ng/injection/bug');

@NgModule({
  imports:   [  ]
  
})
export class TestModule { 
 static configure(x: number[]): ModuleWithProviders {
   return {
     ngModule: TestModule,
     providers: [
       ...x.map(num => ({
         provide: NUMBER,
         useValue: num,
         multi: true
       }))
     ]
   };
 }

 constructor(@Inject(NUMBER) x: number[]) {
   console.log("I will work in no-prod mode like a charm and show injected numbers! But nothing in PROD mode without any error!!");
   console.log(x);
 }

}
