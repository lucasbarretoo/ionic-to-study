import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";
@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    private observer = Inject(IntersectionObserver);
    private renderer = Inject(Renderer2);
    
    @ViewChild('triggerScrollElem', { read: ElementRef, static: true}) triggerScrollElem?: ElementRef;
    @ViewChild(IonContent, { read: ElementRef, static: true}) ionContentArea?: ElementRef;

    constructor() { 

        console.log('teste');
    }

    ngOnInit() {

        // console.log('this.observer: ', this.observer);
        this.observer = new IntersectionObserver((entries) => {
            
            console.log('entries: ', entries);

            entries.forEach((entry: any) => {
                console.log('entries: ', entry);

                if(entry.isIntersecting){
                    // add transform
                    
                    this.ionContentArea?.nativeElement.classList.add("no-transform");
                }else{
                    // remove transform
                    // console.log('remove transform: ');
                    
                    this.ionContentArea?.nativeElement.classList.remove("no-transform");
                }
            })
        })
        console.log('this.observer: ', this.observer);
        this.observer.observe(this.triggerScrollElem?.nativeElement);
    }

    handleScroll(event: any){
        console.log('event: ', event);
    }
}
