# Knowledges of Angular

## CMD Code:  
1. Environment
    node -v  
    npm -v  
2. Angular CLI
    npm install -g @angular/cli  
    ng -v  
3. Create Project 
    ng new xxProject  
4. Run project  
    cd xxProject  
    ng serve --port:8888  
5. Bootstrap  
    1) npm install bootstrap --save (=npm i bootstrap -S)  
    *change angular.json>styles & app.component.html
    OR:
    2) use Bootstrap CDN
    *change app.component.html
6. Create component  
    ng generate component xxComponent (=ng g c xxComponent)  
    *not generate test file by using '--spec false'  
7. Split project  
    ng g c xxFunctionoperate  
    *not generate test file by using '--spec false'  
    ng g c xxDatashow  
    *not generate test file by using '--spec false'  
8. Create Directives  
    ng generate directive xxDirective (=ng g d xxDirective)  
    *not generate test file by using '--spec false'  
    *change ngOnInit() & Constructor()

## Concepts
### Structure:  
    index.html-> main.ts-> app.module.ts-> app.component (html/ts/css/spec.ts)  

### Debug:  
    Browser Extension: Angular angury  

### Import:  
    import {Component} from '@angular/core';  

### Change style:  
    xx.component.css  
    xx.component.ts> @component> styles  

### Encapsulation:  
    encapsulation: ViewEncapsulation.None  
    *Emulated:default value / None:global style / Native:local interface  

### Selector:  
    selector:'[app-servers]' => <div app-servers></div>  
    selector:'.app-servers'  => <div class='.app-servers'></div>  
    selector:'app-servers'   => <app-servers></app-servers>  

### Local pointing:  
    <input #input001>  
    <button (click)="ondosth(input001)"></button>  

## Data Transmission  
### Template Binding:  
1. Common:  
    {{ xx }} / {{ getXX() }} / {{ 'xx' }}  
    *use mainly by string  

2. Property Binding(parent->child):  
    [xx]='xxvalue'  
    *use mainly by judge/bool/composition/string/other  
    Self-defined property binding:  
        child: @input('xxalias') xx:{}  
        parent: yy=[]  
        <app-yy [xxalias]=yy>  

3. Event Binding(child->parent):  
    (click)="onCreateServer()"  
    (input)="onUpdateServer($event)"  
    Self-defined event binding:  
        child: @output('xxalias') xx=new EventEmitter<{aa:string,bb:string}>();  
        parent: <app-yy (xxalias)="ondosth($event)">  

4. Two ways Binding:  
    [(ngModel)]="ServerName"  

### Directive (Structural/Attribute):  
1. *ngFor  
    <p *ngFor="let x of xx;let i=index" >  
        {{x.attr1}}  
    </p>  
2. *ngIf  
    <p *ngIf="xx;else yy"></p>  
    <ng-template #yy>  
    OR  
    <div *ngIf="aa">  
        <li *ngFor="let b of bb">  
            {{ b }}  
        </li>  
    </div>  
3. [ngStyle]  
    <p [ngStyle]="{color:getColor()}"></p>  
    <p [ngStyle]="{color:aa%2!==0?'red':'blue'}">  
4. [ngClass]  
    <p [ngClass]="{xxClass:aa%2!==0}"></p>  
5. Self-defined Directive:

6. Directive Listener:
    @HostListener('xxevent') xxevent()  
    
7. Data Binding:
    @HostBinding('style.xx') xx:string='xxvalue'  

8. Property Binding:  
    @input defaultColor:string="blue";  
    @input highlightColor:string="red";  
    @HostBinding('style.backgroundColor') backgroundColor:string;  
    @HostListener(){this.backgroundColor=this.defaultColor;}  
    <p [appxx]="'red'" [defaultColor]="'blue'">..</p>  
    
### ViewChild  
    @ViewChild('input001') input001:ElementRef  
    ondosth(){  
        xx:this.input001.nativeElement.value  
    }  
  
## ContentChild

## ng-content
